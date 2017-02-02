Page({
  data: {
    inputPassword: false,
    isLoading: false,
    account: '',
    password: ''
  },
  onLoad: function () {
  },
  pwdFocus() {
    this.setData({
      inputPassword: true
    })
  },
  pwdBlur() {
    this.setData({
      inputPassword: false
    })
  },
  bindAccountInput(e) {
    this.setData({
      account: e.detail.value
    })
  },
  bindPasswordInput(e) {
    this.setData({
      password: e.detail.value
    })
  },
  bindIdentity() {
    this.setData({
      isLoading: true
    })

    setTimeout(() => {
      this.setData({
        isLoading: false
      })
    }, 1000)

  }

})
