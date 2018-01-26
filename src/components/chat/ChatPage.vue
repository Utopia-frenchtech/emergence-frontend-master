<template>
  <div id="chat-page">
    <div class="messages" ref="messagesEl">
      <div v-for="messages in messagesByDay" :key="messages.createdAt">
        <date-separator :date="messages.createdAt"></date-separator>
        <div v-for="message in messages.messages" :key="message.createdAt">
          <message :message="message" :self="message.sender.id === cs_uid"></message>
        </div>
      </div>
    </div>
    <div class="form">
      <message-form :user="user" :onSubmit="postMessage"></message-form>
    </div>
    <div class="experience">
      <experience :total="exp.total" :current="exp.current"></experience>
    </div>
</div>
</template>

<script>
/**
 * The chat page
 */
import faker from 'faker'
import chatHelpers from '@/helpers/chatHelpers'
import Message from './Message.vue'
import MessageForm from './MessageForm.vue'
import DateSeparator from './DateSeparator.vue'
import Experience from '@/components/emergence/Experience'

import API from '@/services/API'

import { mapState } from 'vuex'

export default {
  name: 'chat-page',
  components: {
    Message,
    MessageForm,
    DateSeparator,
    Experience
  },
  data: function () {
    return {
      messages: [
        // to be printed when there are 0 message
        {
          sender: {
            name: 'Altai',
            id: -1
          },
          content: this.$i18n.t('components.chat.firstMessage'),
          createdAt: (new Date()).toISOString()
        }
      ]
    }
  },
  computed: {
    messagesByDay: function () {
      const byDay = chatHelpers.groupByDay(this.messages) // {[date]:message}
      return Object.keys(byDay).map((createdAt) => (
        { createdAt, messages: byDay[createdAt] }
      ))// [{createdAt: date, messages: messages}]
      .sort((a, b) => {
        if (a.createdAt < b.createdAt) {
          return -1
        } else if (a.createdAt > b.createdAt) {
          return 1
        }
        return 0
      }) // sort by date, reversed
    },
    // ...mapState(['user', 'exp']),
    ...mapState(['user', 'userId','exp']),
    cs_uid: function(){
      if (this.user==null){
        return 0
      }
      return this.user.cs_uid
    }
  },
  updated: function () {
    // scroll to bottom when messages are updated
    this.scrollMessagesToBottom()
  },
  methods: {
    scrollMessagesToBottom: function () {
        // if there are 800 px of messages (including the hidden messages),
        // we scroll to 800 (y is reversed) => we are at the bottom
      this.$refs.messagesEl.scrollTop = this.$refs.messagesEl.scrollHeight
    },
    postMessage: function (messageContent, name) {
      const message = {
        sender: {
          id: this.user.cs_uid, // NOTE : there should always be a unique ID, event for new users, due to ChatScript behaviour
          // id: this.$store.state.user.uid, // NOTE : there should always be a unique ID, event for new users, due to ChatScript behaviour
          name: name || this.user.name
        },
        content: messageContent,
        createdAt: (new Date()).toISOString(),
        // bot: this.$store.state.vename
        bot: 'Altai'
      }
      // add user message
      this.messages = [...this.messages, message]
      API.message.post(message)
      .then(responseMessage => {
        // add a timeout, because we want the answer not to appear too quickly
        setTimeout(() => {
          // add our own message and the answer
          this.messages = [...this.messages, responseMessage]
        }, faker.random.number(1700, 3000))
      })
      // update experience
      API.emergence.getExp()
    }
  }
}
</script>

<style lang="scss">
  #chat-page{
    max-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .messages{
      flex-grow: 1;
      overflow-y: auto;
      min-height: 250px;
      padding: 24px 0px;
    }
  }

</style>
