import { css, html, LitElement } from "lit";
import "./todo-item.js";

class TodoList extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
    };
  }

  constructor() {
    super();
    this.todos = [];
  }

  render() {
    return html`
      ${this.todos.length === 0
        ? html`<div class="no-todos">You have no to-do items</div>`
        : this.todos.map(
            (todo) =>
              html`<todo-item
                task=${todo.task}
                .completed=${todo.completed}
              ></todo-item>`
          )}
    `;
  }

  static get styles() {
    return css`
     /* CSS Styles here */
    `;
  }
}

customElements.define("todo-list", TodoList);
