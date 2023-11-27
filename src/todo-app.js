import { LitElement, css, html } from "lit";
import "./todo-list.js";
import "./todo-item.js";

export class TodoApp extends LitElement {
  constructor() {
    super();
    this.todos = [];
    this.taskName = "";
  }

  render() {
    return html`
      <h1><slot></slot></h1>
      <form @submit="${this.onSubmit}">
        <label>
          Task Name
          <input
            type="text"
            placeholder="New Task"
            .value="${this.taskName}"
            @input="${(e) => (this.taskName = e.target.value)}"
          />
        </label>
        <button type="submit">Add Todo</button>
      </form>
      <todo-list .todos=${this.todos}></todo-list>
    `;
  }

  onSubmit(e) {
    e.preventDefault();
    this.todos = [...this.todos, { task: this.taskName, completed: false }];
    this.taskName = "";
  }

  static get properties() {
    return {
      todos: { type: Array },
      taskName: { type: String },
    };
  }

  static get styles() {
    return css`
      h1 {
        font-size: 48px;
        color: tomato;
        font-family: Helvetica;
      }
      form {
        display: flex;
      }
      label {
        display: flex;
        flex-direction: column;
        font-family: Helvetica;
        font-size: 16px;
      }
      input {
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid;
        margin: 0.5rem 1px;
      }
      button {
        border: none;
        background-color: tomato;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        margin: 0.5rem 0;
        height: calc(2rem + 5px);
        align-self: flex-end;
      }
    `;
  }
}

window.customElements.define("todo-app", TodoApp);
