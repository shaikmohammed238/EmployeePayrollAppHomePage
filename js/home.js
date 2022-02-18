/* UC4: Display Employee Details in Tabular Format using Template Literals */

window.addEventListener('DOMContentLoaded', () => {
    createInnerHTML();
});

// Template literal ES6 feature
const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
        <tr>
        <td><img class="profile" alt="" src="../assets/profiles/Ellipse -2.png">
        </td>
        <td>Mohammed</td>
        <td>Male</td>
        <td>
            <div class="dept-label">Hr</div>
            <div class="dept-label">Finance</div>
        </td>
        <td>3000000</td>
        <td>1 Jan 2022</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
        </td>
        </tr>
        `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}