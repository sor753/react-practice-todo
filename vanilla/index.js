document.addEventListener('DOMContentLoaded', () => {
  const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    const div = document.createElement("div");

    const li = document.createElement("li");
    li.innerText = inputText;

    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener('click', () => {
      deleteFromIncompleteList(completeButton.parentNode);

      const addTarget = completeButton.parentNode;
      const text = addTarget.firstChild.innerText;

      addTarget.textContent = null;
      const li = document.createElement("li");
      li.innerText = text;

      const backButton = document.createElement("button");
      backButton.innerText = "戻す";

      addTarget.appendChild(li);
      addTarget.appendChild(backButton);

      document.getElementById("complete-list").appendChild(addTarget)
    })


    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener('click', () => {
      deleteFromIncompleteList(deleteButton.parentNode);
    })

    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    document.getElementById("incomplete-list").appendChild(div);
  }
  
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  }

  document
    .getElementById("add-button")
    .addEventListener('click', () =>onClickAdd());
})
