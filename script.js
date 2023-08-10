console.log("I am working for you Mr.Closterman");

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', () => {
        // Toggle between adding and removing the 'active' class,
        // to highlight the button that controls the panels
        this.classList.toggle('active');

        // Toggle between hiding and showing the active panel
        let panel = this.nextElementSibling;
        if(panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
}

//Nice API call

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
      // Simulating an API call with setTimeout
      setTimeout(() => {
        const users = {
          1: { id: 1, name: 'John', age: 30 },
          2: { id: 2, name: 'Jane', age: 25 },
          3: { id: 3, name: 'Bob', age: 40 },
        };
        if (userId in users) {
          resolve(users[userId]);
        } else {
          reject(new Error('User not found'));
        }
      }, 1000);
    });
  }
  
  async function processUser(userId) {
    try {
      const user = await fetchUserData(userId);
      console.log('User:', user);
  
      // Simulating another asynchronous operation
      const userPosts = await fetchUserPosts(userId);
      console.log('Posts:', userPosts);
  
      // Simulating another asynchronous operation
      const userComments = await fetchUserComments(userId);
      console.log('Comments:', userComments);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  function fetchUserPosts(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const posts = [
          { id: 1, title: 'First Post', content: 'Lorem ipsum...', userId: userId },
          { id: 2, title: 'Second Post', content: 'Dolor sit amet...', userId: userId },
        ];
        resolve(posts.filter((post) => post.userId === userId));
      }, 1500);
    });
  }
  
  function fetchUserComments(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const comments = [
          { id: 1, text: 'Great post!', userId: userId },
          { id: 2, text: 'Interesting...', userId: userId },
          { id: 3, text: 'Thanks for sharing!', userId: userId },
        ];
        resolve(comments.filter((comment) => comment.userId === userId));
      }, 2000);
    });
  }
  
  // Usage:
  processUser(1);
  