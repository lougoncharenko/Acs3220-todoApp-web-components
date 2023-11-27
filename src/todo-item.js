import { LitElement, css, html } from "lit";

class TodoItem extends LitElement {
  static get properties() {
    return {
      task: { type: String },
      completed: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.task = "Default Task";
    this.completed = false;
  }

  render() {
    return html`
      <label class="todo">
        <input
          type="checkbox"
          .checked=${this.completed}
          @change=${this._handleCheckboxChange}
        />
        <div class="todo-text ${this.completed ? "completed" : ""}">
          ${this.task}
        </div>
      </label>
    `;
  }

  static get styles() {
    return css`
      .todo {
        display: flex;
        align-items: center;
        padding: 0.5rem;
        background-color: blue;
        color: white;
        font-family: Helvetica;
        font-size: 16px;
        margin: 1px;
      }

      input {
        margin: 0.5rem;
      }
    `;
  }
}

customElements.define("todo-item", TodoItem);
