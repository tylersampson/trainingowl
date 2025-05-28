// In this example, we show how components can be defined and created.
import { Component, useState, mount } from "@odoo/owl";

class Counter extends Component {
   static template = "oca_training.Counter";
   setup() {
       this.counter = useState({ value: 0 });
   }
   increment() {
       this.counter.value++;
   }
}


mount(Counter, document.body, { templates: TEMPLATES, dev: true });
