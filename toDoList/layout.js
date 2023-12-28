import Functional from './functional.js'

export default class Layout {
    constructor(root) {
        this.root = root;
    }


    //-------------------------------HEADER--------------------------------------------------

    header = this.createElement('header-container', 'div')
    headerContent = this.createElement('header-content', 'div')
    logo = this.createElement('logo-container', 'div')
    logoText = this.createElement('logo-text', 'div', 'toDoList')
    logoImg = this.createElement('logo-img', 'img', './public/pngegg.png')

    //-------------------------------PAGE--------------------------------------------------

    page = this.createElement('page-container', 'div')

    //-------------------------------SIDEBAR--------------------------------------------------

    saidbar = this.createElement('saidbar-container', 'div')
    saidbarContent = this.createElement('saidbar-content', 'div')
    saidbarCategory = this.createElement('saidbar-category-container', 'div')
    categoryTitle = this.createElement('category-title', 'div', 'Папки:')
    categoryList = this.createElement('category-list', 'div')
    categoryAdd = this.createElement('category-add', 'div', '+')
    saidbarSort = this.createElement('saidbar-sort-container', 'div')
    sortTitle = this.createElement('sort-title', 'div', 'Сортировка:')
    sortListPriority = this.createElement('sort-list-priority-container', 'div')
    sortListPriorityText = this.createElement('sort-list-priority-text', 'div', 'По приоритету ')
    sortListPriorityImg = this.createElement('sort-list-priority-img', 'img', './public/sort_icon.png')
    sortListDate = this.createElement('sort-list-date-container', 'div')
    sortListDateText = this.createElement('sort-list-date-text', 'div', 'По дате ')
    sortListDateImg = this.createElement('sort-list-date-img', 'img', './public/sort_icon.png')
    saidbarPeriod = this.createElement('saidbar-period-container', 'div')
    periodTitle = this.createElement('period-title', 'div', 'Период:')
    saidbarSortAllDay = this.createElement('saidbar-sort-allday', 'div', 'Все время')
    saidbarSortToday = this.createElement('saidbar-sort-today', 'div', 'Сегодня')
    saidbarSortWeek = this.createElement('saidbar-sort-week', 'div', 'Неделя')
    saidbarToFromSortPeriod = this.createElement('sort-sort-to-from-container', 'div')
    saidbarToSortPeriod = this.createElement('saidbar-sort-to', 'input')
    saidbarFromSortPeriod = this.createElement('saidbar-sort-from', 'input', 'date')
    saidbarSortPeriodShow = this.createElement('saidbar-sort-show-btn', 'button', 'Показать')

    //-------------------------------MAIN--------------------------------------------------

    main = this.createElement('main-container', 'div')
    mainContent = this.createElement('main-content', 'div')
    postAdd = this.createElement('post-add', 'div', '+')

    //-------------------------------CreateFolder--------------------------------------------------
    folder = this.createElement('folder-container', 'div')
    folderContent = this.createElement('folder-content', 'div')
    folderInput = this.createElement('folder-input', 'input', 'Введите название')
    folderAdd = this.createElement('folder-add', 'button', 'Добавить')
    folderCancel = this.createElement('folder-cancel', 'button', 'Отмена')

    //-------------------------------addPost--------------------------------------------------

    post = this.createElement('post-container', 'div')
    postContent = this.createElement('post-content', 'div')
    postInputTitle = this.createElement('post-input-title', 'input')
    postTextArea = this.createElement('post-input-textarea', 'textarea')
    postDatePriority = this.createElement('post-date-priority', 'div')
    postDate = this.createElement('post-date', 'input')
    postPrioritySelect = this.createElement('post-priority', 'select')
    postPriorityOption1 = this.createElement('post-option', 'option', 'easy')
    postPriorityOption2 = this.createElement('post-option', 'option', 'normal')
    postPriorityOption3 = this.createElement('post-option', 'option', 'urgently')
    postAddCancel = this.createElement('post-add-cancel', 'div')
    postAdd2 = this.createElement('post-add2', 'button', 'Добавить')
    postCancel = this.createElement('post-cancel', 'button', 'Отмена')

    //-------------------------------editPost--------------------------------------------------

    postEdit = this.createElement('post-container', 'div')
    postEditContent = this.createElement('post-content', 'div')
    postEditInputTitle = this.createElement('post-input-title', 'input')
    postEditTextArea = this.createElement('post-input-textarea', 'textarea')
    postEditDatePriority = this.createElement('post-date-priority', 'div')
    postEditDate = this.createElement('post-date', 'input')
    postEditPrioritySelect = this.createElement('post-priority', 'select')
    postEditPriorityOption1 = this.createElement('post-option', 'option', 'easy')
    postEditPriorityOption2 = this.createElement('post-option', 'option', 'normal')
    postEditPriorityOption3 = this.createElement('post-option', 'option', 'urgently')
    postEditAddCancel = this.createElement('post-add-cancel', 'div')
    postEditAdd2 = this.createElement('post-add2', 'button', 'Редактировать')
    postEditCancel = this.createElement('post-cancel', 'button', 'Отмена')



    //-------------------------------morePost--------------------------------------------------

    postMore = this.createElement('post-container', 'div')
    postMoreContent = this.createElement('post-content', 'div')
    postMoreInputTitle = this.createElement('post-input-title', 'div')
    postMoreTextArea = this.createElement('post-input-textarea', 'div')
    postMoreDatePriority = this.createElement('post-date-priority', 'div')
    postMoreDate = this.createElement('post-date', 'div')
    postMorePriority = this.createElement('post-priority', 'div')
    postMorePriorityText = this.createElement('post-priority-text', 'div')
    postMorePriorityImg = this.createElement('post-priority-img', 'img')
    postMoreAddCancel = this.createElement('post-add-cancel', 'div')
    postMoreCancel = this.createElement('post-cancel', 'button', 'Закрыть')

    //-------------------------------auxiliary--------------------------------------------------
    currentFolder = 0;
    prio = { 'normal': 'обычный', 'urgently': 'срочно', 'easy': 'легкий' }
    local = JSON.parse(localStorage.getItem('date'));
    func = new Functional()
    postEditForm = {};

    //'date','priority'
    //decreasing increase

    sortingSwitch = 'priority';
    sortDate = 'decreasing';
    sortPriority = 'decreasing';
    //.active-list
    //console.log(func.sortlListPriority('decreasing'))
    //console.log(func.sortlListPriority('increase'))

    createHeader() {
        this.logo.append(this.logoText, this.logoImg)
        this.headerContent.append(this.logo)
        this.header.append(this.headerContent)
    }


    createMainList(num) {
        this.mainContent.innerHTML = '';
        this.mainContent.append(this.postAdd);
        if (this.local.length !== 0) {
            this.local[num].date.forEach(el => {
                this.mainContent.append(this.createPost(el.title, el.priority, el.id))
            });
        }
    }


    createMain() {
        this.createMainList(0)
        this.postAdd.addEventListener('click', () => {
            this.post.style.visibility = 'visible';
        })
        this.mainContent.append(this.postAdd)
        this.main.append(this.mainContent)
    }

    addCategoryInList() {
        this.categoryList.innerHTML = ''
        if (this.local.length !== 0)
            this.local.forEach((element, id) => {
                this.categoryList.append(this.createCategory(element.folder, id))
            });
    }

    createSidebar() {
        this.addCategoryInList()
        this.categoryList.children[0].children[0].classList.add('active-list')
        this.categoryAdd.addEventListener('click', () => {
            this.folder.style.visibility = 'visible';
        })
        this.saidbarCategory.append(this.categoryTitle, this.categoryAdd, this.categoryList)
        this.sortListPriority.append(this.sortListPriorityText, this.sortListPriorityImg)
        this.sortListDate.append(this.sortListDateText, this.sortListDateImg)
        this.sortListPriority.addEventListener('click', (e, i) => { })
        this.sortListDate.addEventListener('click', (e, i) => { })
        this.saidbarSort.append(this.sortTitle, this.sortListPriority, this.sortListDate)
        this.saidbarToSortPeriod.type = 'date'
        this.saidbarFromSortPeriod.type = 'date'
        this.saidbarToFromSortPeriod.append(this.saidbarToSortPeriod, this.saidbarFromSortPeriod, this.saidbarSortPeriodShow)
        this.saidbarPeriod.append(this.periodTitle, this.saidbarSortAllDay, this.saidbarSortToday, this.saidbarSortWeek, this.saidbarToFromSortPeriod)
        this.saidbarContent.append(this.saidbarCategory, this.saidbarSort, this.saidbarPeriod)
        this.saidbar.append(this.saidbarContent)
    }

    removeAddActive(num) {
        Array.from(this.categoryList.children).forEach(el => {
            console.log(el)
            el.children[0].classList.remove('active-list')
        })
        this.categoryList.children[num].children[0].classList.add('active-list')
        this.createMainList(num)
    }
    removeAddActive2(num) {
        //'date','priority'
        //decreasing increase

        sortingSwitch = 'priority';
        sortDate = 'decreasing';
        sortPriority = 'decreasing';
    }


    //createCategory вызывать при создании папки
    createCategory(title, num) {
        const wrap = this.createElement('list-item-wrap', 'div')
        const elem = this.createElement('list-item', 'div', title)
        elem.addEventListener('click', (e, i) => {
            this.currentFolder = num
            this.removeAddActive(num)
        })
        const img = this.createElement('list-item-img', 'img', './public/delete.png');

        img.addEventListener('click', () => {
            this.func.deleteCategory(num)
            this.local = JSON.parse(localStorage.getItem('date'));
            this.addCategoryInList()
            this.createMainList(0)
            this.removeAddActive(0)
        });

        wrap.append(elem, img)
        return wrap;
    }

    createFolder() {
        this.folderCancel.addEventListener('click', () => {
            this.folderInput.value = ''
            this.folder.style.visibility = 'hidden';

        });
        this.folderAdd.addEventListener('click', () => {
            console.log('click')
            if (this.folderInput.value.length !== 0) {
                this.func.addFolder(this.folderInput.value)
                this.local = JSON.parse(localStorage.getItem('date'));
                this.addCategoryInList()
                this.removeAddActive(0)
                this.folderInput.value = ''
                this.folder.style.visibility = 'hidden';
            } else {
                this.folderInput.style.borderBottom = '1px solid red';
            }
        });
        this.folderContent.append(this.folderInput, this.folderAdd, this.folderCancel)
        this.folder.append(this.folderContent)
    }




    addPost() {
        this.postInputTitle.placeholder = 'Введите заголовок'
        this.postTextArea.placeholder = 'Введите описание'
        this.postPriorityOption1.textContent = 'легкий'
        this.postPriorityOption2.textContent = 'обычный'
        this.postPriorityOption3.textContent = 'срочно'
        this.postPrioritySelect.append(this.postPriorityOption1, this.postPriorityOption2, this.postPriorityOption3)
        this.postDate.type = 'date'
        this.postDatePriority.append(this.postDate, this.postPrioritySelect)

        this.postAdd2.addEventListener('click', () => {
            console.log(this.local[this.currentFolder].date.length)
            const obj = {
                id: this.local[this.currentFolder].date.length,
                title: this.postInputTitle.value,
                discription: this.postTextArea.value,
                date: this.postDate.value,
                priority: this.postPrioritySelect.value,
            };
            this.func.addPost(obj, this.currentFolder)
            this.local = JSON.parse(localStorage.getItem('date'));
            this.mainContent.append(this.createPost(this.postInputTitle.value, this.postPrioritySelect.value, this.local[this.currentFolder].date.length))
            this.clearPostForm()
        })

        this.postCancel.addEventListener('click', () => {
            this.clearPostForm()
        })
        this.postAddCancel.append(this.postAdd2, this.postCancel)
        this.postContent.append(this.postInputTitle, this.postTextArea, this.postDatePriority, this.postAddCancel)
        this.post.append(this.postContent)
    }

    fillEditingForm(idPost) {
        this.postEditForm = this.local[this.currentFolder].date[idPost]
        this.postEditInputTitle.value = this.postEditForm.title
        this.postEditTextArea.value = this.postEditForm.discription
        this.postEditPrioritySelect.value = this.postEditForm.priority
        this.postEditDate.value = this.postEditForm.date

    }

    showMorePost(idPost) {
        this.postEditForm = this.local[this.currentFolder].date[idPost]
        this.postEditInputTitle.value = this.postEditForm.title
        this.postEditTextArea.value = this.postEditForm.discription
        this.postEditPrioritySelect.value = this.postEditForm.priority
        this.postEditDate.value = this.postEditForm.date
        this.postMoreInputTitle.textContent = this.postEditForm.title
        this.postMoreTextArea.textContent = this.postEditForm.discription
        this.postMoreDate.textContent = this.postEditForm.date
        this.postMorePriorityText.textContent = this.prio[this.postEditForm.priority]
        this.postMorePriorityImg.src

        if (this.postEditForm.priority === 'normal') {
            this.postMorePriorityImg.src = './public/free-icon-filled-circle-blue.png'
        }
        if (this.postEditForm.priority === 'easy') {
            this.postMorePriorityImg.src = './public/free-icon-filled-circle-green.png'
        }
        if (this.postEditForm.priority === 'urgently') {
            this.postMorePriorityImg.src = './public/free-icon-filled-circle-red.png'
        }

    }


    editPost() {
        this.postEditInputTitle.placeholder = 'Введите заголовок'
        this.postEditTextArea.placeholder = 'Введите описание'
        this.postEditPriorityOption1.textContent = 'легкий'
        this.postEditPriorityOption2.textContent = 'обычный'
        this.postEditPriorityOption3.textContent = 'срочно'
        this.postEditPrioritySelect.append(this.postEditPriorityOption1, this.postEditPriorityOption2, this.postEditPriorityOption3)
        this.postEditDate.type = 'date'
        this.postEditDatePriority.append(this.postEditDate, this.postEditPrioritySelect)

        this.postEditAdd2.addEventListener('click', () => {
            const obj = {
                id: this.postEditForm.id,
                title: this.postEditInputTitle.value,
                discription: this.postEditTextArea.value,
                date: this.postEditDate.value,
                priority: this.postEditPrioritySelect.value,
            };

            this.func.editPost(obj, this.currentFolder, this.postEditForm.id)
            this.local = JSON.parse(localStorage.getItem('date'));
            this.createMainList(this.currentFolder)
            this.clearPostEdirForm()
        })

        this.postEditCancel.addEventListener('click', () => {
            console.log('CCCCCAN')
            this.clearPostEdirForm()
        })
        this.postEditAddCancel.append(this.postEditAdd2, this.postEditCancel)
        this.postEditContent.append(this.postEditInputTitle, this.postEditTextArea, this.postEditDatePriority, this.postEditAddCancel)
        this.postEdit.append(this.postEditContent)
    }


    morePost() {
        this.postMoreCancel.addEventListener('click', () => {
            this.postMore.style.visibility = 'hidden';
        })

        this.postMorePriority.append(this.postMorePriorityText, this.postMorePriorityImg)
        this.postMoreDatePriority.append(this.postMoreDate, this.postMorePriority)
        this.postMoreAddCancel.append(this.postMoreCancel)
        this.postMoreContent.append(this.postMoreInputTitle, this.postMoreTextArea, this.postMoreDatePriority, this.postMoreAddCancel)
        this.postMore.append(this.postMoreContent)
    }


    clearPostEdirForm() {
        this.postEdit.style.visibility = 'hidden';
        this.postEditInputTitle.value = '';
        this.postEditTextArea.value = '';
        this.postEditDate.value = '';
        this.postEditPrioritySelect.value = '';
    }

    clearPostForm() {
        this.post.style.visibility = 'hidden';
        this.postInputTitle.value = '';
        this.postTextArea.value = '';
        this.postDate.value = '';
        this.postPrioritySelect.value = '';
    }

    createPost(titl, priorit, num) {
        const wrap = this.createElement('post-item-wrap', 'div')
        wrap.dataset.number = num;
        const title = this.createElement('post-item-title', 'div', titl)
        const wrapPriorityEditDeletePostMore = this.createElement('post-item-edit-delete-more', 'div')
        const wrapPriority = this.createElement('post-item-priority-container', 'div')
        const priority = this.createElement('post-item-priority', 'div', this.prio[priorit])
        const priorityImg = this.createElement('post-item-priority-img', 'img')
        if (priorit === 'normal') {
            priorityImg.src = './public/free-icon-filled-circle-blue.png'
        }
        if (priorit === 'easy') {
            priorityImg.src = './public/free-icon-filled-circle-green.png'
        }
        if (priorit === 'urgently') {
            priorityImg.src = './public/free-icon-filled-circle-red.png'
        }
        wrapPriority.append(priority, priorityImg)
        const edit = this.createElement('post-item-edit', 'img', './public/edit.png')
        edit.addEventListener('click', () => {
            this.postMainListEdit = wrap;
            this.fillEditingForm(num)
            this.postEdit.style.visibility = 'visible';
        })
        const deletePost = this.createElement('post-item-delete', 'img', './public/delete.png')
        deletePost.addEventListener('click', () => {
            this.func.deletePost(num, this.currentFolder)
            this.local = JSON.parse(localStorage.getItem('date'));
            this.createMainList(this.currentFolder)
        })

        const more = this.createElement('post-item-more', 'img', './public/more.png')
        more.addEventListener('click', () => {
            this.showMorePost(num)
            this.postMore.style.visibility = 'visible';
        })
        wrapPriorityEditDeletePostMore.append(wrapPriority, edit, deletePost, more)
        wrap.append(title, wrapPriorityEditDeletePostMore)
        return wrap;
    }



    generatyPage() {
        this.createHeader()
        this.page.append(this.saidbar, this.main)
        this.createSidebar()
        this.createMain()
        this.createFolder();
        this.addPost();
        this.editPost()
        this.morePost()
        this.root.append(this.header, this.page, this.folder, this.post, this.postEdit, this.postMore)
    }

    createElement(selector, tag, text = '') {
        const elem = document.createElement(tag);
        if (Array.isArray(selector)) {
            elem.classList.add(...selector)
        } else {
            elem.classList.add(selector)
        }
        if (tag === 'img') {
            elem.src = text;
        } else if (tag === 'option') {
            elem.value = text;
        } else {
            elem.textContent = text;
        }
        return elem;
    }


}