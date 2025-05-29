// In this example, we show how components can be defined and created.
import { Component, useState, mount } from "@odoo/owl";

export class Child extends Component {
   static template = "training_oca.Child";
   static props = { onIncrement: Function };
}

export class Parent extends Component {
   static template = "training_oca.Parent";
   static components = { Child };

   setup() {
      this.state = useState({ count: 0 });
   }

   increment() {
      this.state.count++;
   }
}

mount(Parent, document.body, { templates: TEMPLATES, dev: true });
