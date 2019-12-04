import todoItem from './todo-item';
import state from '../state';

const MainCard = () => `
    <div id='main-card'>
        <ul id='todo-list'>
            ${state
    .get('projects')[state.get('selectedProject')]
    .todos
    .map(i => todoItem(i.title))
    .join('')}
        </ul>
        <div class="btn-wrapper">
            <button id='add-todo-btn'>
                <i class='material-icons'>
                    add
                </i>
            </button>
        </div>
    </div>
`;

export default MainCard;
