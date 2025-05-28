// In this example, we show how components can be defined and created.
import { Component, useRef, onMounted, mount } from "@odoo/owl";

class FocusedElement extends Component {
   static template = "oca_training.FocusedElement";

   setup() {
       this.inputEl = useRef("input_el");
       onMounted(() => {
           this.inputEl.el.focus();
       });
   }
}


mount(FocusedElement, document.body, { templates: TEMPLATES, dev: true });
