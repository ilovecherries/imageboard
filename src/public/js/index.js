fetch('threads')
    .then(res => res.json())
    .then(threads => {
        console.log(threads)
        let parent = document.getElementById('threads')
        for (let i = 0; i < threads.length; ++i) {
            let elem = document.createElement('div')
            elem.className += ' row border p-1'
            elem.innerText = `thread ${i}. id ${threads[i].id}`
            parent.appendChild(elem)
            let postsContainer = document.createElement('div')
            postsContainer.className += ' container'
            parent.appendChild(postsContainer)
            fetch(`thread?id=${threads[i].id}`)
                .then(res => res.json())
                .then(res => {
                    for (let i of res) {
                        let elem = document.createElement('div')
                        let image = document.createElement('img')
                        let content = document.createElement('div')
                        elem.classList += ' row border p-2'
                        // image
                        if (i.attachment != null) {
                            content.classList += ' w-75'
                            image.classList += ' attachment'
                            image.src = i.attachment
                            elem.appendChild(image)
                        }
                        // content
                        content.innerText = `${i.name} <${i.id}>\n${i.content}`
                        elem.appendChild(content)
                        postsContainer.appendChild(elem)
                    }
                    let sendBox = document.createElement('div')
                    let sendTextarea = document.createElement('textarea')
                    sendBox.classList += ' row border p-2'
                    sendTextarea.classList += ' form-control w-75'
                    sendTextarea.rows = 3
                    sendTextarea.id = `input-area-${threads[i].id}`
                    sendBox.appendChild(sendTextarea)
                    postsContainer.appendChild(sendBox)
                })
                .catch(e => console.error('.-.'))
        }
    })
    .catch(e => console.error(`oh nyo T-T: ${e}`))