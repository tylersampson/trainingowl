// In this example, we show how components can be defined and created.
import { Component, useState, mount } from "@odoo/owl";

class Child extends Component {
   static template = "oca_training.Child";
   static props = {data: Object};
}
class Parent extends Component {
   static template = "oca_training.Parent";
   static components = { Child };
   setup() {
       this.state = useState({childs: [
               { id: 1, name: "Child 1", color: "yellow"},
               { id: 2, name: "Child 2", color: "green"},
       ]});
   }
}

mount(Parent, document.body, { templates: TEMPLATES, dev: true });
