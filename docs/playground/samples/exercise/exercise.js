// In this example, we show how components can be defined and created.
import { Component, useState, useRef, mount } from "@odoo/owl";

export class Counter extends Component {
   static template = 'training_oca.Counter';
   static props = { id: Number, name: String, counter: Number, onSave: Function, onIncrement: Function };

   setup() {
      this.state = useState({
         editing: false,
      });
   }

   toggleEdit() {
      this.state.editing = !this.state.editing;
   }
}

export class Dashboard extends Component {
   static template = 'training_oca.Dashboard';
   static components = { Counter };

   setup() {
      this.state = useState({
         counters: [{
            id: 1,
            name: 'Days without nuclear breakdowns',
            value: 1,
         }, {
            id: 2,
            name: 'Days with no new requirements',
            value: 0,
         }, {
            id: 3,
            name: 'Days without bugs',
            value: 198,
         }],
      });
   }

   addCounter() {
      const newCounter = {
         id: this.state.counters.length + 1,
         name: `New Counter ${this.state.counters.length + 1}`,
         value: 0,
      };
      this.state.counters.push(newCounter);
   }

   updateCounter(id, name) {
      const counter = this.state.counters.find(c => c.id === id);
      if (counter) {
         counter.name = name;
      }
   }

   removeCounter(id) {
      this.state.counters = this.state.counters.filter(c => c.id !== id);
   }

   incrementCounter(id) {
      console.log(id);
      var counter = this.state.counters.find(c => c.id === id);
      if (counter) {
         counter.value += 1;
      }
   }
}

mount(Dashboard, document.body, { templates: TEMPLATES, dev: true });
