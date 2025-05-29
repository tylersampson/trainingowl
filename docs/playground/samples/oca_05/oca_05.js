// In this example, we show how components can be defined and created.
import { Component, useState, mount, useSubEnv } from "@odoo/owl";

export class Child extends Component {
   static template = 'training_oca.Child';
   setup() {
      this.counter = useState(this.env.counter);
   }
}

export class B extends Component {
   static template = 'training_oca.B';
   static components = { Child };
}

export class A extends Component {
   static template = 'training_oca.A';
   static components = { B };
}

export class Parent extends Component {
   static template = 'training_oca.Parent';
   static components = { A };
   setup() {
      this.counter = useState({ count: 0 });
      useSubEnv({ counter: this.counter });
   }
   onIncrement() {
      this.counter.count++;
   }
}

mount(Parent, document.body, { templates: TEMPLATES, dev: true });
