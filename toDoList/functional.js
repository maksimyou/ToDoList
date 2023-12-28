export default class Functional {
    //decreasing = убывание
    //increase = возрастание

    date = 'decreasing'
    priority = 'decreasing'
    sortlListPriority(turn) {
        //let res = [];
        console.log('sadffasdasdf')
        let res;
        const local = JSON.parse(localStorage.getItem('date'));
        if (turn === 'increase') {
            res = local.map(element => {
                let arr1 = [];
                let arr2 = [];
                let arr3 = [];
                element.date.forEach(el => {
                    if (el.priority === 'easy') arr1.push(el)
                    if (el.priority === 'normal') arr2.push(el)
                    if (el.priority === 'urgently') arr3.push(el)
                })
                return [...arr1, ...arr2, ...arr3];
            });
        }
        if (turn === 'decreasing') {
            res = local.map(element => {
                let arr1 = [];
                let arr2 = [];
                let arr3 = [];
                element.date.forEach(el => {
                    if (el.priority === 'urgently') arr1.push(el)
                    if (el.priority === 'normal') arr2.push(el)
                    if (el.priority === 'easy') arr3.push(el)
                })
                return [...arr1, ...arr2, ...arr3];
            });
        }
        return res;
    }


    sortlListDate(turn) {
        const local = JSON.parse(localStorage.getItem('date'));
    }

    deleteCategory(num) {
        let res = JSON.parse(localStorage.getItem('date')).filter((e, id) => id !== num)
        console.log(res)
        localStorage.setItem('date', JSON.stringify(res));
    }

    deletePost(postId, postFolder) {
        let res = JSON.parse(localStorage.getItem('date'))
        let date = res[postFolder].date;
        let arr = date.filter(e => postId !== e.id).map((j, id) => {
            j.id = id;
            return j;
        })
        res[postFolder].date = arr
        localStorage.setItem('date', JSON.stringify(res));
    }

    addFolder(text) {
        const local = JSON.parse(localStorage.getItem('date'));
        const id = local.length - 1
        console.log(local, id)
        local.push({
            folder: text,
            id: id,
            date: []
        })
        localStorage.setItem('date', JSON.stringify(local));
    }


    addPost(obj, id) {
        const loc = JSON.parse(localStorage.getItem('date'));
        let res = loc.map(e => {
            if (e.id === id) { e.date.push(obj); return e } else { return e }
        })
        localStorage.setItem('date', JSON.stringify(res));
    }

    editPost(obj, idFold, idPost) {
        console.log(obj)
        const loc = JSON.parse(localStorage.getItem('date'));
        let res = loc.map(e => {
            if (e.id === idFold) { e.date[idPost] = obj; return e } else { return e }
        })
        localStorage.setItem('date', JSON.stringify(res));
    }
    sortToday() { }
    sortWeek() { }
    sortPeriod() { }

}