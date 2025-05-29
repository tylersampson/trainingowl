// In this example, we show how components can be defined and created.
import { Component, useEnv, useSubEnv, useState, mount } from "@odoo/owl";

export function useCounter() {
   const env = useEnv();
   if (env.counter) {
      return useState(env.counter);
   }
   const counter = useState({ count: 0 });
   useSubEnv({ counter });
   return counter;
}

export class Child extends Component {
   static template = 'training_oca.Child';
   setup() {
      this.counter = useCounter();
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
      this.counter = useCounter();
   }
   onIncrement() {
      this.counter.count++;
   }
}

mount(Parent, document.body, { templates: TEMPLATES, dev: true });
