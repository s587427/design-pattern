class MyLog {
  constructor() {
    this.messages = []
  }

  static instance = null

  static getInstance() {
    if (MyLog.instance == null) {
      MyLog.instance = new MyLog()
    }
    return MyLog.instance
  }

  log(message) {
    this.messages.push(message)
    console.log("Log: " + message)
  }

  printMessageLength() {
    console.log(this.messages.length + " Logs")
  }
}

const mylog = MyLog.getInstance()
export default mylog
