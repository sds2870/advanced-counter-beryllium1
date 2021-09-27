/* The Advanced Counter object should have the following property and methods:

  count: a number which represents the current count, initial value 0

  render(): when this function runs, the DOM will be updated to display the current state of the counter

  next(): increment the counter by 1, then render()

  prev(): decrement the counter by 1, then render()

  reset(): reset the counter to 0, then render()

  skipForward(): increment the counter by 10, then render()

  skipBackward(): decrement the counter by 10, then   render()

  startTimer(): start a timer and render() every second

  stopTimer(): stop the timer, then render()
*/

const countView = document.querySelector("#count")

//Imperative (Procedural)
// let count = 0;

// let increment = () => count += 1;

// let decrement = () => count -= 1;

// increment()

const counter = {
  count: 0,
  intervalId: null,

  render: function () {
    countView.replaceChildren(this.count)
  },

  next: function () {
    this.count += 1
    this.render()
  },

  prev: function () {
    this.count -= 1
    this.render()
  },

  reset: function () {
    this.count = 0
    this.render()
  },

  skipForward: function () {
    this.count += 10
    this.render()
  },

  skipBackward: function () {
    this.count -= 10
    this.render()
  },

  startTimer: function () {
    this.intervalId = setInterval(() => {
      this.count += 1
      this.render()
    }, 1000)
  },

  stopTimer: function () {
    clearInterval(this.intervalId)
  },
}


const counter2 = {
  count: -100,
  render: counter.render,
  next: counter.next,
  prev: counter.prev,
  reset: counter.reset,
  skipForward: counter.skipForward,
  skipBackward: counter.skipBackward,
  startTimer: counter.startTimer,
  stop: counter.stopTimer
}

const counter3 = {
  count: 500,
  render: counter.render,
  next: counter.next,
}

// counter.next()
// counter2.next()
// counter3.next()
let controlsElement = document.querySelector("#controls")
controlsElement.addEventListener("click", event => {
  const clickedElement = event.target
  
  if (clickedElement.id === "next") {
    counter.next()
  } else if (clickedElement.id === "prev") {
    counter.prev()
  } else if (clickedElement.id === "reset") {
    counter.reset()
  } else if (clickedElement.id === "skip-forward") {
    counter.skipForward()
  } else if (clickedElement.id === "skip-backward") {
    counter.skipBackward()
  } else if (clickedElement.id === "start-timer") {
    counter.startTimer()
  } else if (clickedElement.id === "stop-timer") {
    counter.stopTimer()
  }
})


// setTimeout(() => console.log("This is fourth."), 6000)
// setTimeout(() => console.log("This is third."), 2000)
// setTimeout(() => console.log("This is second."), 0)
// console.log("This log will run first.");