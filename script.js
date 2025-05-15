// DOM Elements
const navLinks = document.getElementById('navLinks');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

// Sample data for the blog
let blogPosts = localStorage.getItem('blogPosts') ? 
    JSON.parse(localStorage.getItem('blogPosts')) : 
    [
        {
            id: 1,
            title: "10 Essential Tips for Modern Web Development",
            excerpt: "Discover the most important practices and tools that every web developer should know in 2023.",
            content: `<p>Web development is constantly evolving, and staying up-to-date with the latest practices is essential for creating modern, efficient websites. Here are 10 tips that every web developer should know:</p>
                    <h2>1. Embrace Modern JavaScript</h2>
                    <p>ES6+ features like arrow functions, destructuring, and async/await make your code cleaner and more maintainable. Don't be afraid to use them!</p>
                    <h2>2. Optimize for Performance</h2>
                    <p>Performance is crucial for user experience. Use tools like Lighthouse to identify and fix performance issues.</p>
                    <h2>3. Adopt a Component-Based Approach</h2>
                    <p>Whether you're using a framework or vanilla JS, thinking in components helps create reusable, maintainable code.</p>
                    <h2>4. Prioritize Accessibility</h2>
                    <p>Web content should be accessible to everyone. Use semantic HTML, provide alt text for images, and ensure keyboard navigation works.</p>
                    <h2>5. Implement Responsive Design</h2>
                    <p>With the variety of devices used to access the web, responsive design is no longer optional.</p>
                    <h2>6. Use CSS Custom Properties</h2>
                    <p>CSS variables make your stylesheets more maintainable and allow for dynamic theme changes.</p>
                    <h2>7. Adopt Progressive Enhancement</h2>
                    <p>Build a solid foundation that works for everyone, then enhance the experience for users with modern browsers.</p>
                    <h2>8. Implement Proper Error Handling</h2>
                    <p>Anticipate and handle errors gracefully to provide a better user experience.</p>
                    <h2>9. Write Tests</h2>
                    <p>Testing helps catch bugs early and ensures your code works as expected.</p>
                    <h2>10. Stay Curious and Keep Learning</h2>
                    <p>The web development landscape is always changing. Dedicate time to learning new tools and techniques.</p>`,
            coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
            category: "technology",
            tags: ["web development", "javascript", "css", "html", "tips"],
            author: {
                id: 1,
                name: "John Doe",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                bio: "Full-stack developer with a passion for creating beautiful, functional websites."
            },
            date: "2023-05-15",
            readTime: "8 min read",
            likes: 124,
            comments: [
                {
                    id: 1,
                    author: {
                        id: 2,
                        name: "Jane Smith",
                        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
                    },
                    text: "Great article! I especially liked the point about accessibility. It's often overlooked but so important.",
                    date: "2023-05-16",
                    likes: 8
                },
                {
                    id: 2,
                    author: {
                        id: 3,
                        name: "Mike Johnson",
                        avatar: "https://randomuser.me/api/portraits/men/46.jpg"
                    },
                    text: "I would add that learning about web security is also crucial these days. Maybe that could be tip #11?",
                    date: "2023-05-17",
                    likes: 12
                }
            ]
        },
        {
            id: 2,
            title: "The Ultimate Guide to Bali: Hidden Gems and Local Favorites",
            excerpt: "Explore the less-known sides of Bali with this comprehensive guide to the island's best-kept secrets.",
            content: `<p>Bali, known as the Island of the Gods, is a popular destination for travelers seeking beautiful beaches, vibrant culture, and spiritual experiences. While places like Kuta, Seminyak, and Ubud are well-known, there are many hidden gems that offer a more authentic experience.</p>
                    <h2>Sidemen Valley: Bali's Best-Kept Secret</h2>
                    <p>Located in East Bali, Sidemen Valley offers stunning landscapes of rice terraces, river valleys, and Mount Agung in the background. Unlike the more famous Tegallalang rice terraces, Sidemen remains relatively untouched by mass tourism.</p>
                    <h2>Nyang Nyang Beach: Secluded Paradise</h2>
                    <p>This hidden beach requires a bit of effort to reach - a 15-minute drive from Uluwatu followed by a 15-20 minute hike down a cliff. The reward? A nearly empty stretch of white sand and crystal-clear water.</p>
                    <h2>Bali's Secret Waterfalls</h2>
                    <p>While Gitgit and Tegenungan waterfalls see plenty of visitors, waterfalls like Leke Leke, Tibumana, and Tukad Cepung offer equally beautiful scenery with far fewer crowds.</p>
                    <h2>Local Warungs: Authentic Balinese Cuisine</h2>
                    <p>Skip the tourist restaurants and try these local favorites:</p>
                    <ul>
                        <li>Warung Babi Guling Pak Malen in Seminyak for the best suckling pig</li>
                        <li>Warung Mak Beng in Sanur for traditional fish soup</li>
                        <li>Nasi Ayam Kedewatan Ibu Mangku in Ubud for the best chicken rice</li>
                    </ul>
                    <h2>Sacred Temples Off the Tourist Trail</h2>
                    <p>While Tanah Lot and Uluwatu temples are magnificent, consider visiting these less crowded but equally spiritual places:</p>
                    <ul>
                        <li>Pura Lempuyang: Famous for its "Gates of Heaven"</li>
                        <li>Pura Gunung Kawi: An 11th-century temple complex with rock-cut shrines</li>
                        <li>Pura Taman Ayun: A royal temple surrounded by a moat</li>
                    </ul>
                    <h2>Practical Tips for Authentic Experiences</h2>
                    <p>To truly experience the magic of Bali:</p>
                    <ul>
                        <li>Learn a few basic Indonesian phrases</li>
                        <li>Hire a local guide for insider knowledge</li>
                        <li>Stay in a homestay to experience Balinese family life</li>
                        <li>Visit during local ceremonies (but be respectful)</li>
                        <li>Explore by scooter to discover places not on the tourist map</li>
                    </ul>
                    <p>Bali has so much more to offer beyond its famous attractions. By venturing off the beaten path, you'll discover the true essence of this magical island.</p>`,
            coverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
            category: "travel",
            tags: ["bali", "travel guide", "indonesia", "hidden gems", "travel tips"],
            author: {
                id: 4,
                name: "Sarah Williams",
                avatar: "https://randomuser.me/api/portraits/women/64.jpg",
                bio: "Travel writer and photographer with a love for exploring off-the-beaten-path destinations."
            },
            date: "2023-06-02",
            readTime: "10 min read",
            likes: 89,
            comments: [
                {
                    id: 3,
                    author: {
                        id: 5,
                        name: "David Chen",
                        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
                    },
                    text: "I visited Sidemen Valley based on your recommendation and it was absolutely breathtaking! Thank you for sharing these hidden gems.",
                    date: "2023-06-05",
                    likes: 5
                }
            ]
        },
        {
            id: 3,
            title: "Mastering the Art of Sourdough Bread: A Beginner's Guide",
            excerpt: "Learn how to create delicious sourdough bread at home with this step-by-step guide for beginners.",
            content: `<p>Sourdough bread has experienced a renaissance in recent years, and for good reason. Its complex flavors, chewy texture, and beautiful crust make it a favorite among bread enthusiasts. While it may seem intimidating at first, making sourdough bread at home is a rewarding process that anyone can master with a bit of patience and practice.</p>
                    <h2>Creating Your Sourdough Starter</h2>
                    <p>The heart of sourdough bread is the starter - a fermented mixture of flour and water that contains wild yeast and beneficial bacteria. Here's how to create your own:</p>
                    <ol>
                        <li><strong>Day 1:</strong> Mix 50g whole wheat flour with 50g water in a glass jar. Cover loosely and let sit at room temperature for 24 hours.</li>
                        <li><strong>Day 2:</strong> Discard half the mixture. Add 50g all-purpose flour and 50g water. Mix well and let sit for another 24 hours.</li>
                        <li><strong>Days 3-7:</strong> Repeat the process from Day 2. By day 5-7, your starter should be doubling in size within 8 hours of feeding and showing plenty of bubbles.</li>
                    </ol>
                    <h2>Basic Sourdough Bread Recipe</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>500g bread flour</li>
                        <li>350g water</li>
                        <li>100g active sourdough starter</li>
                        <li>10g salt</li>
                    </ul>
                    <h3>Method:</h3>
                    <ol>
                        <li><strong>Autolyse:</strong> Mix flour and water, let rest for 30 minutes.</li>
                        <li><strong>Add starter:</strong> Incorporate the active starter into the dough.</li>
                        <li><strong>Add salt:</strong> After 30 minutes, add salt and mix well.</li>
                        <li><strong>Bulk fermentation:</strong> Over 4-6 hours, perform 4-6 sets of stretch and folds.</li>
                        <li><strong>Pre-shape:</strong> Gently shape into a round and let rest for 20 minutes.</li>
                        <li><strong>Final shape:</strong> Shape into a tight ball or batard.</li>
                        <li><strong>Cold proof:</strong> Place in a floured banneton and refrigerate for 12-24 hours.</li>
                        <li><strong>Bake:</strong> Preheat oven with Dutch oven to 500°F (260°C). Score dough, bake covered for 20 minutes, then uncovered for 20-25 minutes at 450°F (230°C).</li>
                    </ol>
                    <h2>Troubleshooting Common Issues</h2>
                    <h3>Flat Bread with No Oven Spring</h3>
                    <p>Possible causes: Overproofed dough, weak starter, insufficient tension during shaping.</p>
                    <h3>Dense, Gummy Crumb</h3>
                    <p>Possible causes: Underproofed dough, insufficient gluten development, underbaked bread.</p>
                    <h3>Overly Sour Flavor</h3>
                    <p>Possible causes: Long fermentation at warm temperatures, using starter that hasn't been fed recently.</p>
                    <h2>Tips for Success</h2>
                    <ul>
                        <li>Maintain a consistent feeding schedule for your starter</li>
                        <li>Use a kitchen scale for accurate measurements</li>
                        <li>Pay attention to dough temperature - it affects fermentation time</li>
                        <li>Be patient and observe how your dough changes</li>
                        <li>Keep notes on each bake to track your progress</li>
                    </ul>
                    <p>Remember, sourdough bread making is as much art as science. Each loaf is a learning experience, and even "failures" are usually delicious! With practice, you'll develop an intuition for the process and be creating beautiful, flavorful loaves in no time.</p>`,
            coverImage: "https://images.unsplash.com/photo-1585478259715-1c093a7b70d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
            category: "food",
            tags: ["baking", "sourdough", "bread", "recipe", "cooking"],
            author: {
                id: 6,
                name: "Emily Johnson",
                avatar: "https://randomuser.me/api/portraits/women/33.jpg",
                bio: "Home baker, cookbook author, and instructor specializing in artisanal bread."
            },
            date: "2023-04-18",
            readTime: "12 min read",
            likes: 156,
            comments: [
                {
                    id: 4,
                    author: {
                        id: 7,
                        name: "Thomas Brown",
                        avatar: "https://randomuser.me/api/portraits/men/5.jpg"
                    },
                    text: "I've been struggling with getting good oven spring, but your troubleshooting section helped me identify the issue. My starter wasn't active enough!",
                    date: "2023-04-20",
                    likes: 3
                },
                {
                    id: 5,
                    author: {
                        id: 8,
                        name: "Lisa Garcia",
                        avatar: "https://randomuser.me/api/portraits/women/8.jpg"
                    },
                    text: "Do you have any recommendations for whole wheat sourdough? I'd like to try a healthier version.",
                    date: "2023-04-22",
                    likes: 2
                },
                {
                    id: 6,
                    author: {
                        id: 6,
                        name: "Emily Johnson",
                        avatar: "https://randomuser.me/api/portraits/women/33.jpg"
                    },
                    text: "@Lisa Garcia - Absolutely! Start by replacing 20% of the bread flour with whole wheat, and increase the water by about 5%. Whole wheat absorbs more water than white flour. You can gradually increase the whole wheat percentage as you get comfortable with the process.",
                    date: "2023-04-23",
                    likes: 7
                }
            ]
        }
    ];

let users = localStorage.getItem('users') ? 
    JSON.parse(localStorage.getItem('users')) : 
    [
        {
            id: 1,
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            bio: "Full-stack developer with a passion for creating beautiful, functional websites.",
            email: "john.doe@example.com",
            website: "https://johndoe.com",
            social: {
                twitter: "johndoe",
                instagram: "johndoe_dev",
                linkedin: "johndoe"
            },
            followers: 1243,
            following: 384,
            posts: [1]
        },
        {
            id: 4,
            name: "Sarah Williams",
            avatar: "https://randomuser.me/api/portraits/women/64.jpg",
            bio: "Travel writer and photographer with a love for exploring off-the-beaten-path destinations.",
            email: "sarah.williams@example.com",
            website: "https://sarahwilliams.com",
            social: {
                twitter: "sarahwilliams",
                instagram: "sarahwilliams_travel",
                linkedin: "sarahwilliams"
            },
            followers: 2567,
            following: 512,
            posts: [2]
        },
        {
            id: 6,
            name: "Emily Johnson",
            avatar: "https://randomuser.me/api/portraits/women/33.jpg",
            bio: "Home baker, cookbook author, and instructor specializing in artisanal bread.",
            email: "emily.johnson@example.com",
            website: "https://emilyjohnson.com",
            social: {
                twitter: "emilyjohnson",
                instagram: "emilyjohnson_bakes",
                linkedin: "emilyjohnson"
            },
            followers: 1876,
            following: 423,
            posts: [3]
        }
    ];

// Current user (for demo purposes)
let currentUser = localStorage.getItem('currentUser') ? 
    JSON.parse(localStorage.getItem('currentUser')) : 
    {
        id: 9,
        name: "Alex Morgan",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        bio: "Tech enthusiast and blogger. I love sharing my thoughts on the latest gadgets and innovations.",
        email: "alex.morgan@example.com",
        website: "https://alexmorgan.com",
        social: {
            twitter: "alexmorgan",
            instagram: "alexmorgan_tech",
            linkedin: "alexmorgan"
        },
        followers: 856,
        following: 267,
        posts: [],
        bookmarks: [1, 3],
        likes: [2]
    };

// Save data to localStorage
function saveData() {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

// Mobile menu toggle
if (openMenu) {
    openMenu.addEventListener('click', () => {
        navLinks.classList.add('active');
    });
}

if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
}

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Function to create post card HTML
function createPostCard(post) {
    return `
        <div class="post-card">
            <div class="post-image">
                <a href="post.html?id=${post.id}">
                    <img src="${post.coverImage}" alt="${post.title}">
                </a>
            </div>
            <div class="post-content">
                <a href="#" class="post-category">${post.category}</a>
                <h3 class="post-title">
                    <a href="post.html?id=${post.id}">${post.title}</a>
                </h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <div class="post-author">
                        <img src="${post.author.avatar}" alt="${post.author.name}" class="author-avatar">
                        <span>${post.author.name}</span>
                    </div>
                    <div class="post-date">${formatDate(post.date)}</div>
                </div>
            </div>
        </div>
    `;
}

// Function to create author card HTML
function createAuthorCard(user) {
    return `
        <div class="author-card">
            <img src="${user.avatar}" alt="${user.name}" class="author-avatar">
            <h3 class="author-name">${user.name}</h3>
            <p class="author-bio">${user.bio}</p>
            <div class="author-stats">
                <div class="author-stat">
                    <span class="stat-value">${user.posts.length}</span>
                    <span class="stat-label">Posts</span>
                </div>
                <div class="author-stat">
                    <span class="stat-value">${user.followers}</span>
                    <span class="stat-label">Followers</span>
                </div>
            </div>
            <button class="btn primary-btn follow-btn">Follow</button>
        </div>
    `;
}

// Function to create comment HTML
function createCommentHTML(comment) {
    return `
        <div class="comment" data-id="${comment.id}">
            <img src="${comment.author.avatar}" alt="${comment.author.name}" class="user-avatar">
            <div class="comment-content">
                <div class="comment-header">
                    <span class="comment-author">${comment.author.name}</span>
                    <span class="comment-date">${formatDate(comment.date)}</span>
                </div>
                <p class="comment-text">${comment.text}</p>
                <div class="comment-actions">
                    <button class="comment-action like-comment" data-id="${comment.id}">
                        <i class="far fa-heart"></i>
                        <span class="like-count">${comment.likes}</span>
                    </button>
                    <button class="comment-action reply-comment" data-id="${comment.id}">
                        <i class="far fa-comment"></i>
                        Reply
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Home page functionality
const featuredPostsContainer = document.getElementById('featuredPosts');
const trendingAuthorsContainer = document.getElementById('trendingAuthors');

if (featuredPostsContainer) {
    // Display featured posts
    featuredPostsContainer.innerHTML = '';
    
    // Sort posts by likes (most popular first)
    const featuredPosts = [...blogPosts].sort((a, b) => b.likes - a.likes).slice(0, 3);
    
    featuredPosts.forEach(post => {
        featuredPostsContainer.innerHTML += createPostCard(post);
    });
}

if (trendingAuthorsContainer) {
    // Display trending authors
    trendingAuthorsContainer.innerHTML = '';
    
    // Sort users by followers (most popular first)
    const trendingAuthors = [...users].sort((a, b) => b.followers - a.followers).slice(0, 4);
    
    trendingAuthors.forEach(user => {
        trendingAuthorsContainer.innerHTML += createAuthorCard(user);
    });
}

// Explore page functionality
const allPostsContainer = document.getElementById('allPosts');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const viewButtons = document.querySelectorAll('.view-btn');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const pageNumbers = document.getElementById('pageNumbers');

let currentPage = 1;
const postsPerPage = 6;
let filteredPosts = [...blogPosts];

// Function to filter and display posts
function filterAndDisplayPosts() {
    // Apply category filter
    if (categoryFilter && categoryFilter.value !== 'all') {
        filteredPosts = blogPosts.filter(post => post.category === categoryFilter.value);
    } else {
        filteredPosts = [...blogPosts];
    }
    
    // Apply search filter if search input exists and has value
    if (searchInput && searchInput.value.trim() !== '') {
        const searchTerm = searchInput.value.trim().toLowerCase();
        filteredPosts = filteredPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) || 
            post.excerpt.toLowerCase().includes(searchTerm) || 
            post.content.toLowerCase().includes(searchTerm) ||
            post.author.name.toLowerCase().includes(searchTerm) ||
            post.category.toLowerCase().includes(searchTerm) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    // Apply sort filter
    if (sortFilter) {
        switch(sortFilter.value) {
            case 'recent':
                filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'popular':
                filteredPosts.sort((a, b) => b.likes - a.likes);
                break;
            case 'comments':
                filteredPosts.sort((a, b) => b.comments.length - a.comments.length);
                break;
        }
    }
    
    // Update pagination
    updatePagination();
    
    // Display posts for current page
    displayPostsForCurrentPage();
}

// Function to update pagination
function updatePagination() {
    if (!pageNumbers) return;
    
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    
    // Reset current page if it's beyond the total pages
    if (currentPage > totalPages) {
        currentPage = 1;
    }
    
    // Update page numbers
    pageNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.innerHTML += `<span class="${i === currentPage ? 'current-page' : ''}">${i}</span>`;
    }
    
    // Add click event to page numbers
    const pageNumberElements = pageNumbers.querySelectorAll('span');
    pageNumberElements.forEach(element => {
        element.addEventListener('click', () => {
            currentPage = parseInt(element.textContent);
            displayPostsForCurrentPage();
            updatePagination();
        });
    });
    
    // Update prev/next buttons
    if (prevPageBtn) {
        prevPageBtn.disabled = currentPage === 1;
    }
    
    if (nextPageBtn) {
        nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
    }
}

// Function to display posts for current page
function displayPostsForCurrentPage() {
    if (!allPostsContainer) return;
    
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToDisplay = filteredPosts.slice(startIndex, endIndex);
    
    allPostsContainer.innerHTML = '';
    
    if (postsToDisplay.length === 0) {
        allPostsContainer.innerHTML = '<div class="no-results">No posts found matching your criteria.</div>';
        return;
    }
    
    postsToDisplay.forEach(post => {
        allPostsContainer.innerHTML += createPostCard(post);
    });
}

// Initialize explore page
if (allPostsContainer) {
    filterAndDisplayPosts();
    
    // Add event listeners
    if (categoryFilter) {
        categoryFilter.addEventListener('change', () => {
            currentPage = 1;
            filterAndDisplayPosts();
        });
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', filterAndDisplayPosts);
    }
    
    if (searchInput && searchButton) {
        searchButton.addEventListener('click', () => {
            currentPage = 1;
            filterAndDisplayPosts();
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                currentPage = 1;
                filterAndDisplayPosts();
                e.preventDefault();
            }
        });
    }
    
    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayPostsForCurrentPage();
                updatePagination();
            }
        });
    }
    
    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                displayPostsForCurrentPage();
                updatePagination();
            }
        });
    }
    
    // View toggle (grid/list)
    if (viewButtons) {
        viewButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                viewButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Update view
                const viewType = button.getAttribute('data-view');
                allPostsContainer.className = `posts-container ${viewType}-view`;
            });
        });
    }
}

// Create post page functionality
const blogForm = document.getElementById('blogForm');
const postTitleInput = document.getElementById('postTitle');
const postCoverImageInput = document.getElementById('postCoverImage');
const imagePreview = document.getElementById('imagePreview');
const postCategoryInput = document.getElementById('postCategory');
const postTagsInput = document.getElementById('postTags');
const postContentEditor = document.getElementById('postContent');
const postExcerptInput = document.getElementById('postExcerpt');
const saveDraftBtn = document.getElementById('saveDraft');
const editorButtons = document.querySelectorAll('.editor-toolbar button');

// Preview cover image
if (postCoverImageInput && imagePreview) {
    postCoverImageInput.addEventListener('input', () => {
        const imageUrl = postCoverImageInput.value.trim();
        if (imageUrl) {
            imagePreview.innerHTML = `<img src="${imageUrl}" alt="Cover image preview">`;
        } else {
            imagePreview.innerHTML = '<p>Image preview will appear here</p>';
        }
    });
}

// Rich text editor functionality
if (editorButtons && postContentEditor) {
    editorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const command = button.getAttribute('data-command');
            
            if (command === 'createLink' || command === 'insertImage') {
                const url = prompt(command === 'createLink' ? 'Enter link URL:' : 'Enter image URL:');
                if (url) {
                    document.execCommand(command, false, url);
                }
            } else if (command === 'h2' || command === 'h3') {
                document.execCommand('formatBlock', false, `<${command}>`);
            } else {
                document.execCommand(command, false, null);
            }
            
            postContentEditor.focus();
        });
    });
}

// Submit blog form
if (blogForm) {
    blogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!postTitleInput.value.trim() || !postCategoryInput.value || !postContentEditor.innerHTML.trim()) {
            alert('Please fill in all required fields: title, category, and content.');
            return;
        }
        
        // Create new blog post
        const newPost = {
            id: blogPosts.length > 0 ? Math.max(...blogPosts.map(post => post.id)) + 1 : 1,
            title: postTitleInput.value.trim(),
            excerpt: postExcerptInput.value.trim() || postTitleInput.value.trim(),
            content: postContentEditor.innerHTML,
            coverImage: postCoverImageInput.value.trim() || 'https://via.placeholder.com/800x400?text=Blog+Post+Image',
            category: postCategoryInput.value,
            tags: postTagsInput.value.split(',').map(tag => tag.trim()).filter(tag => tag),
            author: {
                id: currentUser.id,
                name: currentUser.name,
                avatar: currentUser.avatar,
                bio: currentUser.bio
            },
            date: new Date().toISOString().split('T')[0],
            readTime: Math.ceil(postContentEditor.innerText.split(' ').length / 200) + ' min read',
            likes: 0,
            comments: []
        };
        
        // Add post to blog posts array
        blogPosts.push(newPost);
        
        // Add post to current user's posts
        currentUser.posts.push(newPost.id);
        
        // Save data
        saveData();
        
        // Redirect to the new post
        alert('Blog post published successfully!');
        window.location.href = `post.html?id=${newPost.id}`;
    });
}

// Save draft functionality
if (saveDraftBtn) {
    saveDraftBtn.addEventListener('click', () => {
        const draftTitle = postTitleInput.value.trim() || 'Untitled Draft';
        const draftContent = postContentEditor.innerHTML;
        
        // Get existing drafts or initialize empty array
        const drafts = JSON.parse(localStorage.getItem('drafts') || '[]');
        
        // Create new draft
        const newDraft = {
            id: Date.now(),
            title: draftTitle,
            content: draftContent,
            coverImage: postCoverImageInput.value.trim(),
            category: postCategoryInput.value,
            tags: postTagsInput.value,
            excerpt: postExcerptInput.value.trim(),
            date: new Date().toISOString().split('T')[0]
        };
        
        // Add draft to drafts array
        drafts.push(newDraft);
        
        // Save drafts
        localStorage.setItem('drafts', JSON.stringify(drafts));
        
        alert('Draft saved successfully!');
    });
}

// Individual blog post page functionality
const blogPostContainer = document.getElementById('blogPost');
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');
const commentBtn = document.getElementById('commentBtn');
const commentCount = document.getElementById('commentCount');
const bookmarkBtn = document.getElementById('bookmarkBtn');
const shareBtn = document.getElementById('shareBtn');
const authorName = document.getElementById('authorName');
const authorBio = document.getElementById('authorBio');
const authorAvatar = document.getElementById('authorAvatar');
const followBtn = document.getElementById('followBtn');
const totalComments = document.getElementById('totalComments');
const commentsContainer = document.getElementById('commentsContainer');
const commentInput = document.getElementById('commentInput');
const submitComment = document.getElementById('submitComment');
const relatedPosts = document.getElementById('relatedPosts');
const shareModal = document.getElementById('shareModal');
const shareLink = document.getElementById('shareLink');
const copyLink = document.getElementById('copyLink');

// Get post ID from URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

// Function to display blog post
function displayBlogPost() {
    if (!blogPostContainer || !postId) return;
    
    // Find post by ID
    const post = blogPosts.find(p => p.id === parseInt(postId));
    
    if (!post) {
        blogPostContainer.innerHTML = '<div class="error">Post not found.</div>';
        return;
    }
    
    // Display post
    blogPostContainer.innerHTML = `
        <div class="post-header">
            <h1 class="post-title">${post.title}</h1>
            <div class="post-meta">
                <div class="post-author">
                    <img src="${post.author.avatar}" alt="${post.author.name}">
                    <div class="author-info">
                        <span class="author-name">${post.author.name}</span>
                        <span class="post-date">${formatDate(post.date)} · ${post.readTime}</span>
                    </div>
                </div>
                <div class="post-category-tag">
                    <span class="category-tag">${post.category}</span>
                    ${post.tags.map(tag => `<span class="category-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
        <img src="${post.coverImage}" alt="${post.title}" class="post-featured-image">
        <div class="post-body">
            <div class="post-content">
                ${post.content}
            </div>
        </div>
    `;
    
    // Update like button and count
    if (likeBtn && likeCount) {
        likeCount.textContent = post.likes;
        
        // Check if current user has liked this post
        if (currentUser.likes.includes(post.id)) {
            likeBtn.classList.add('active');
            likeBtn.innerHTML = `<i class="fas fa-heart"></i> <span class="like-count">${post.likes}</span>`;
        }
        
        // Add like functionality
        likeBtn.addEventListener('click', () => {
            if (likeBtn.classList.contains('active')) {
                // Unlike
                post.likes--;
                const index = currentUser.likes.indexOf(post.id);
                if (index > -1) {
                    currentUser.likes.splice(index, 1);
                }
                likeBtn.classList.remove('active');
                likeBtn.innerHTML = `<i class="far fa-heart"></i> <span class="like-count">${post.likes}</span>`;
            } else {
                // Like
                post.likes++;
                currentUser.likes.push(post.id);
                likeBtn.classList.add('active');
                likeBtn.innerHTML = `<i class="fas fa-heart"></i> <span class="like-count">${post.likes}</span>`;
            }
            
            // Update like count
            likeCount.textContent = post.likes;
            
            // Save data
            saveData();
        });
    }
    
    // Update comment count
    if (commentCount) {
        commentCount.textContent = post.comments.length;
    }
    
    // Update bookmark button
    if (bookmarkBtn) {
        // Check if current user has bookmarked this post
        if (currentUser.bookmarks.includes(post.id)) {
            bookmarkBtn.classList.add('active');
            bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i>';
        }
        
        // Add bookmark functionality
        bookmarkBtn.addEventListener('click', () => {
            if (bookmarkBtn.classList.contains('active')) {
                // Remove bookmark
                const index = currentUser.bookmarks.indexOf(post.id);
                if (index > -1) {
                    currentUser.bookmarks.splice(index, 1);
                }
                bookmarkBtn.classList.remove('active');
                bookmarkBtn.innerHTML = '<i class="far fa-bookmark"></i>';
            } else {
                // Add bookmark
                currentUser.bookmarks.push(post.id);
                bookmarkBtn.classList.add('active');
                bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i>';
            }
            
            // Save data
            saveData();
        });
    }
    
    // Update author section
    if (authorName && authorBio && authorAvatar) {
        authorName.textContent = post.author.name;
        authorBio.textContent = post.author.bio;
        authorAvatar.src = post.author.avatar;
        
        // Add follow functionality
        if (followBtn) {
            // Find author in users array
            const author = users.find(user => user.id === post.author.id);
            
            if (author) {
                // Check if current user is following this author
                const isFollowing = author.followers > 0 && Math.random() > 0.5; // Simulating follow status
                
                if (isFollowing) {
                    followBtn.textContent = 'Following';
                    followBtn.classList.add('following');
                }
                
                followBtn.addEventListener('click', () => {
                    if (followBtn.classList.contains('following')) {
                        // Unfollow
                        author.followers--;
                        followBtn.textContent = 'Follow';
                        followBtn.classList.remove('following');
                    } else {
                        // Follow
                        author.followers++;
                        followBtn.textContent = 'Following';
                        followBtn.classList.add('following');
                    }
                    
                    // Save data
                    saveData();
                });
            }
        }
    }
    
    // Display comments
    if (commentsContainer && totalComments) {
        totalComments.textContent = post.comments.length;
        
        commentsContainer.innerHTML = '';
        post.comments.forEach(comment => {
            commentsContainer.innerHTML += createCommentHTML(comment);
        });
        
        // Add like functionality to comments
        const likeCommentBtns = document.querySelectorAll('.like-comment');
        likeCommentBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const commentId = parseInt(btn.getAttribute('data-id'));
                const comment = post.comments.find(c => c.id === commentId);
                
                if (comment) {
                    comment.likes++;
                    btn.innerHTML = `<i class="fas fa-heart"></i> <span class="like-count">${comment.likes}</span>`;
                    btn.classList.add('active');
                    
                    // Save data
                    saveData();
                }
            });
        });
    }
    
    // Add comment functionality
    if (commentInput && submitComment) {
        submitComment.addEventListener('click', () => {
            const commentText = commentInput.value.trim();
            
            if (!commentText) {
                alert('Please enter a comment.');
                return;
            }
            
            // Create new comment
            const newComment = {
                id: post.comments.length > 0 ? Math.max(...post.comments.map(c => c.id)) + 1 : 1,
                author: {
                    id: currentUser.id,
                    name: currentUser.name,
                    avatar: currentUser.avatar
                },
                text: commentText,
                date: new Date().toISOString().split('T')[0],
                likes: 0
            };
            
            // Add comment to post
            post.comments.push(newComment);
            
            // Update comment count
            if (commentCount) {
                commentCount.textContent = post.comments.length;
            }
            
            if (totalComments) {
                totalComments.textContent = post.comments.length;
            }
            
            // Add comment to DOM
            commentsContainer.innerHTML += createCommentHTML(newComment);
            
            // Clear input
            commentInput.value = '';
            
            // Save data
            saveData();
            
            // Add like functionality to new comment
            const likeCommentBtn = document.querySelector(`.like-comment[data-id="${newComment.id}"]`);
            if (likeCommentBtn) {
                likeCommentBtn.addEventListener('click', () => {
                    newComment.likes++;
                    likeCommentBtn.innerHTML = `<i class="fas fa-heart"></i> <span class="like-count">${newComment.likes}</span>`;
                    likeCommentBtn.classList.add('active');
                    
                    // Save data
                    saveData();
                });
            }
        });
    }
    
    // Display related posts
    if (relatedPosts) {
        // Find posts in the same category
        const related = blogPosts
            .filter(p => p.id !== post.id && p.category === post.category)
            .slice(0, 3);
        
        if (related.length === 0) {
            // If no posts in the same category, show random posts
            related.push(...blogPosts
                .filter(p => p.id !== post.id)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3));
        }
        
        relatedPosts.innerHTML = '';
        related.forEach(relatedPost => {
            relatedPosts.innerHTML += createPostCard(relatedPost);
        });
    }
    
    // Share functionality
    if (shareBtn && shareModal) {
        shareBtn.addEventListener('click', () => {
            shareModal.style.display = 'block';
            
            if (shareLink) {
                shareLink.value = window.location.href;
            }
        });
        
        // Close modal
        const closeBtn = shareModal.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                shareModal.style.display = 'none';
            });
        }
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === shareModal) {
                shareModal.style.display = 'none';
            }
        });
        
        // Copy link
        if (copyLink && shareLink) {
            copyLink.addEventListener('click', () => {
                shareLink.select();
                document.execCommand('copy');
                copyLink.textContent = 'Copied!';
                
                setTimeout(() => {
                    copyLink.textContent = 'Copy';
                }, 2000);
            });
        }
    }
}

// Initialize blog post page
displayBlogPost();

// Profile page functionality
const profileName = document.getElementById('profileName');
const profileBio = document.getElementById('profileBio');
const profileAvatar = document.getElementById('profileAvatar');
const postsCount = document.getElementById('postsCount');
const followersCount = document.getElementById('followersCount');
const followingCount = document.getElementById('followingCount');
const editProfileBtn = document.getElementById('editProfileBtn');
const editProfileModal = document.getElementById('editProfileModal');
const editProfileForm = document.getElementById('editProfileForm');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const userPosts = document.getElementById('userPosts');
const userDrafts = document.getElementById('userDrafts');
const userLiked = document.getElementById('userLiked');
const userComments = document.getElementById('userComments');
const profileTabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Function to display user profile
function displayUserProfile() {
    if (!profileName || !profileBio || !profileAvatar) return;
    
    // Display user info
    profileName.textContent = currentUser.name;
    profileBio.textContent = currentUser.bio;
    profileAvatar.src = currentUser.avatar;
    
    if (postsCount) {
        postsCount.textContent = currentUser.posts.length;
    }
    
    if (followersCount) {
        followersCount.textContent = currentUser.followers;
    }
    
    if (followingCount) {
        followingCount.textContent = currentUser.following;
    }
    
    // Display user posts
    if (userPosts) {
        userPosts.innerHTML = '';
        
        const posts = blogPosts.filter(post => currentUser.posts.includes(post.id));
        
        if (posts.length === 0) {
            userPosts.innerHTML = '<div class="no-posts">You haven\'t published any posts yet.</div>';
        } else {
            posts.forEach(post => {
                userPosts.innerHTML += createPostCard(post);
            });
        }
    }
    
    // Display user drafts
    if (userDrafts) {
        userDrafts.innerHTML = '';
        
        const drafts = JSON.parse(localStorage.getItem('drafts') || '[]');
        
        if (drafts.length === 0) {
            userDrafts.innerHTML = '<div class="no-posts">You don\'t have any drafts.</div>';
        } else {
            drafts.forEach(draft => {
                userDrafts.innerHTML += `
                    <div class="post-card">
                        <div class="post-content">
                            <h3 class="post-title">
                                <a href="create.html?draft=${draft.id}">${draft.title}</a>
                            </h3>
                            <p class="post-excerpt">${draft.excerpt || 'No excerpt available'}</p>
                            <div class="post-meta">
                                <div class="post-date">Last edited: ${formatDate(draft.date)}</div>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
    }
    
    // Display liked posts
    if (userLiked) {
        userLiked.innerHTML = '';
        
        const likedPosts = blogPosts.filter(post => currentUser.likes.includes(post.id));
        
        if (likedPosts.length === 0) {
            userLiked.innerHTML = '<div class="no-posts">You haven\'t liked any posts yet.</div>';
        } else {
            likedPosts.forEach(post => {
                userLiked.innerHTML += createPostCard(post);
            });
        }
    }
    
    // Display user comments
    if (userComments) {
        userComments.innerHTML = '';
        
        // Find all comments by the current user
        const comments = [];
        blogPosts.forEach(post => {
            post.comments.forEach(comment => {
                if (comment.author.id === currentUser.id) {
                    comments.push({
                        ...comment,
                        postId: post.id,
                        postTitle: post.title
                    });
                }
            });
        });
        
        if (comments.length === 0) {
            userComments.innerHTML = '<div class="no-posts">You haven\'t commented on any posts yet.</div>';
        } else {
            comments.forEach(comment => {
                userComments.innerHTML += `
                    <div class="comment">
                        <img src="${comment.author.avatar}" alt="${comment.author.name}" class="user-avatar">
                        <div class="comment-content">
                            <div class="comment-header">
                                <span class="comment-author">You commented on <a href="post.html?id=${comment.postId}">${comment.postTitle}</a></span>
                                <span class="comment-date">${formatDate(comment.date)}</span>
                            </div>
                            <p class="comment-text">${comment.text}</p>
                        </div>
                    </div>
                `;
            });
        }
    }
}

// Initialize profile page
displayUserProfile();

// Tab functionality
if (profileTabs && tabContents) {
    profileTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            profileTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Show corresponding tab content
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(`${tabId}Tab`).classList.add('active');
        });
    });
}

// Edit profile functionality
if (editProfileBtn && editProfileModal) {
    editProfileBtn.addEventListener('click', () => {
        editProfileModal.style.display = 'block';
        
        // Populate form with current user data
        document.getElementById('editName').value = currentUser.name;
        document.getElementById('editBio').value = currentUser.bio;
        document.getElementById('editEmail').value = currentUser.email;
        document.getElementById('editWebsite').value = currentUser.website;
        
        if (currentUser.social) {
            document.getElementById('editTwitter').value = currentUser.social.twitter || '';
            document.getElementById('editInstagram').value = currentUser.social.instagram || '';
            document.getElementById('editLinkedin').value = currentUser.social.linkedin || '';
        }
    });
    
    // Close modal
    const closeBtn = editProfileModal.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            editProfileModal.style.display = 'none';
        });
    }
    
    if (cancelEditBtn) {
        cancelEditBtn.addEventListener('click', () => {
            editProfileModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === editProfileModal) {
            editProfileModal.style.display = 'none';
        }
    });
    
    // Submit edit profile form
    if (editProfileForm) {
        editProfileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Update user data
            currentUser.name = document.getElementById('editName').value.trim();
            currentUser.bio = document.getElementById('editBio').value.trim();
            currentUser.email = document.getElementById('editEmail').value.trim();
            currentUser.website = document.getElementById('editWebsite').value.trim();
            
            currentUser.social = {
                twitter: document.getElementById('editTwitter').value.trim(),
                instagram: document.getElementById('editInstagram').value.trim(),
                linkedin: document.getElementById('editLinkedin').value.trim()
            };
            
            // Save data
            saveData();
            
            // Update profile display
            displayUserProfile();
            
            // Close modal
            editProfileModal.style.display = 'none';
            
            alert('Profile updated successfully!');
        });
    }
}

// Bookmarks page functionality
const bookmarkedPosts = document.getElementById('bookmarkedPosts');
const noBookmarks = document.getElementById('noBookmarks');
const searchBookmarks = document.getElementById('searchBookmarks');
const searchBookmarksBtn = document.getElementById('searchBookmarksBtn');
const filterDropdownLinks = document.querySelectorAll('.filter-dropdown-content a');

// Function to display bookmarked posts
function displayBookmarkedPosts(filter = 'all', searchTerm = '') {
    if (!bookmarkedPosts) return;
    
    // Get bookmarked posts
    let posts = blogPosts.filter(post => currentUser.bookmarks.includes(post.id));
    
    // Apply filter
    if (filter !== 'all') {
        if (filter === 'recent') {
            posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else {
            posts = posts.filter(post => post.category === filter);
        }
    }
    
    // Apply search
    if (searchTerm) {
        posts = posts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) || 
            post.excerpt.toLowerCase().includes(searchTerm) || 
            post.content.toLowerCase().includes(searchTerm) ||
            post.author.name.toLowerCase().includes(searchTerm) ||
            post.category.toLowerCase().includes(searchTerm) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    // Display posts
    if (posts.length === 0) {
        if (noBookmarks) {
            noBookmarks.style.display = 'block';
        }
        bookmarkedPosts.innerHTML = '';
    } else {
        if (noBookmarks) {
            noBookmarks.style.display = 'none';
        }
        
        bookmarkedPosts.innerHTML = '';
        posts.forEach(post => {
            bookmarkedPosts.innerHTML += createPostCard(post);
        });
    }
}

// Initialize bookmarks page
displayBookmarkedPosts();

// Add search functionality
if (searchBookmarks && searchBookmarksBtn) {
    searchBookmarksBtn.addEventListener('click', () => {
        const searchTerm = searchBookmarks.value.trim().toLowerCase();
        displayBookmarkedPosts('all', searchTerm);
    });
    
    searchBookmarks.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchTerm = searchBookmarks.value.trim().toLowerCase();
            displayBookmarkedPosts('all', searchTerm);
            e.preventDefault();
        }
    });
}

// Add filter functionality
if (filterDropdownLinks) {
    filterDropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const filter = link.getAttribute('data-filter');
            const searchTerm = searchBookmarks ? searchBookmarks.value.trim().toLowerCase() : '';
            
            displayBookmarkedPosts(filter, searchTerm);
        });
    });
}

