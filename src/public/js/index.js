
fetch('threads')
    .then(res => res.json())
    .then(res => {
        console.log(res)
        let parent = document.getElementById('threads')
        for (let i = 0; i < res.length; ++i) {
            let elem = document.createElement('div')
            elem.className += ' row'
            elem.innerText = `thread ${i}. id ${res[i].id}`
            parent.appendChild(elem)
            let postsContainer = document.createElement('div')
            postsContainer.className += ' container'
            parent.appendChild(postsContainer)
            fetch(`thread?id=${res[i].id}`)
                .then(res => res.json())
                .then(res => {
                    for (let i of res) {
                        let elem = document.createElement('div')
                        elem.classList += ' row'
                        elem.innerText = `<${i.id}> : ${i.content}`
                        postsContainer.appendChild(elem)
                    }
                })
                .catch(e => console.error('.-.'))
        }
    })
    .catch(e => console.error(`oh nyo T-T: ${e}`))