
function createModal(id) {
    const modalContainer = document.createElement('div');
    const userImg = document.createElement('img');
    const userName = document.createElement('h3');
    const userDescription = document.createElement('span');
    const postTitle = document.createElement('h2');
    const postContent = document.createElement('p');
    let element = {}

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === Number(id)) {
            element = posts[i];
        }

    }
}

userImg.src = 'src/assets/img/user1.svg';
userImg.alt = 'Foto do usuário'





function renderModal() {
    const modal = document.querySelector('.modal__container');
    const buttons = document.querySelector('.card__openPostBtn');

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

    }



}