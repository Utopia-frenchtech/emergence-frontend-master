import objectValidator from '@/helpers/objectValidator'

describe('helpers/objectValidator', () => {
  it('should check required fields', () => {
    const propTypes = {
      foo: {
        type: String,
        required: true
      }
    }
    const validObject = {
      foo: 'hello'
    }
    const invalidObject = {}
    const validator = objectValidator.makeObjectValidator(propTypes)
    expect(validator(validObject)).to.be.true
    expect(validator(invalidObject)).to.be.false
  })

  it('should ignore additional fields', () => {
    const propTypes = {
      foo: {
        type: String,
        required: true
      }
    }
    const validObject = {
      foo: 'hello',
      hi: 42
    }
    const validator = objectValidator.makeObjectValidator(propTypes)
    expect(validator(validObject)).to.be.true
  })

  it('should ignore facultative fields', () => {
    const propTypes = {
      foo: {
        type: String,
        required: true
      },
      bar: {
        type: String,
        required: false
      }
    }
    const validObject = {
      foo: 'hello'
    }
    const validator = objectValidator.makOobjectValidator(propTypes)
    expect(validator(validObject)).to.be.true
  })

  it('should check type', () => {
    const propTypes = {
      foo: {
        type: String,
        required: true
      }
    }
    const validObject = {
      foo: 'hello'
    }
    const invalidObject = {
      foo: 42
    }
    const validator = objectValidator.makeObjectValidator(propTypes)
    expect(validator(validObject)).to.be.true
    expect(validator(invalidObject)).to.be.false
  })
})
