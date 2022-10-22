const posts = [
    { title: 'Post One', body: 'this is post one', createdAt: new Date().getTime() },
    { title: 'Post two', body: 'this is post two', createdAt: new Date().getTime() }
]
let intervalId = 0;
function getPost() {
    clearInterval(intervalId);
    setInterval(() => {
        let output = '';
        for (let i = 0; i < posts.length; i++) {
            output += `<li>${posts[i].title} -
            last updated ${(new Date().getTime() - posts[i].createdAt) / 1000} seconds ago 
            </li>`;
        }
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ post, createdAt: new Date().getTime() });
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Something went wrong');
            }
        }, 2000)
    })
}

function deletepost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const lastElement = posts.pop();
                resolve(lastElement)
            } else {
                reject('Arrays is empty now');
            }
        }, 1000);

    });
}       
createPost({ title: 'Post three', body: 'this is post three' })
    .then(() => {
        getPost()
            deletepost().then(() => {
                getPost();
                deletepost().then(() => {
                    getPost();
                    deletepost().then(() => {
                        getPost();
                        deletepost().then(() => {
                        }).catch((err) => {
                            console.log('inside catch block',err)
                        })
                    })
                })
            })
        })

const user = {
    name: 'Ayush',
    lastactivity: '21 october 2022'
}

function updateLastUserActivityTime(post) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            user.lastactivity = new Date().getTime();
            resolve(user.lastactivity)
        },1000)
    })
}


function userupdatespost(){
    Promise.all([createPost, updateLastUserActivityTime])
    .then(([createPost, updateLastUserActivityTime])=>{
        console.log(updateLastUserActivityTime)
    })
    .catch(err=>console.log(err))
}

        const promise1 = Promise.resolve('hello world');
        const promise2 = 10;
        const promise3 = new Promise((resolve , reject)=>
        setTimeout(resolve,2000,'Goodbye'));
        const  updateLastUserActivityTime = new Promise((resolve, reject)) ;
        const promise4 = Promise.all([promise1,promise2,promise3]).then(values => console.log(values));






