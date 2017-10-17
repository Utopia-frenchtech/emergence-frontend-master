<template>
  <div>
    <p v-for="user in users">
    {{user}}
    </p>
  </div>

</template>

<script>
  import {db} from '@/config/firebase'

export default {
    data () {
      return {
        users: {}
      }
    },

    firebase: {
      users: {
        source: db.ref('users').child('-KvwATV6ziTEB5NSsliG'),
        // Optional, allows you to handle any errors.
        cancelCallback (err) {
          console.error(err)
        }
      }
    }
  }
</script>
