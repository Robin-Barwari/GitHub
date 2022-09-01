<template>
    <div id="app">
        <h2>My Recipes:</h2>

        <!-- Bar containing all sort inputs -->
        <div id="sort-bar">
            <select name="sortBy" id="select" v-model="sortBy">
                <option value="alphabetically">Alphabetically</option>
                <option value="price">Price</option>
            </select>
            <button v-on:click="ascending = !ascending" class="sort-button">
                <i v-if="ascending" class="fa fa-sort-up"></i>
                <i v-else class="fa fa-sort-down"></i>
            </button>
            <input type="number" v-model="maxPrice" id="price-input"></input>
            <input type="text" v-model="searchValue" placeholder="Search Game" id="search-input"></input>
            <i class="fa fa-search"></i>
        </div>

        <!-- Where the array of recipes get rendered as cards -->
        <div id="providers-container">
            <div class="card" v-for="provider in filteredProviders" :key="provider.title">
                <img :src="provider.img" class="provider-image"></img>
                <div class="content">
                    <h1 class="provider-title">
                        {{ provider.title }}
                    </h1>
                    <p>
                        {{ provider.description }}
                    </p>
                    <span class="rank-span">

                        <h3 class="rank-title">
                            Rank:
                        </h3>
                        <ol class="rank-list">
                            <li v-for="rank in provider.ranks">- {{ rank }}</li>
                        </ol>
                    </span>

                    <h3>
                        Cooking Time:
                    </h3>
                    <p>
                        {{ provider.price }}
                    </p>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            providers: [
                {
                    titelGame: 'Overwatch',
                    contactInfo: 'ILike2Win@carry.com',
                    rank: 'Grand Master',
                    Price: '20€',
                    img: '../public/overwatch_carry.jpeg',
                },
                {
                    titelGame: 'Rainbow Six Siege',
                    contactInfo: 'GG2EZ@carry.com',
                    rank: 'Diamond II',
                    Price: '35€',
                    img: '../public/r6s_carry.webp',
                },
                {
                    titelGame: 'CS:GO',
                    contactInfo: 'Putin_nr_1@carry.com',
                    rank: 'Gold Nova II',
                    Price: '5€',
                    img: '../public/csgo_carry.webp',
                },
                {
                    titelGame: 'Rocket League',
                    contactInfo: 'I_bad_fotballs@carry.com',
                    rank: 'Platinum III',
                    Price: '15€',
                    img: '../public/rocket_carry.jpeg',
                },
                {
                    titelGame: 'Valorant',
                    contactInfo: 'W3ndig0@carry.com',
                    rank: 'Silver II',
                    Price: '150€',
                    img: '../public/valorant_carry.jpg',
                },
            ]
        };
    },
    computed: {
        filteredProviders() {
            let tempProviders = this.providers

            // Process search input
            if (this.searchValue != '' && this.searchValue) {
                tempProviders = tempProviders.filter((item) => {
                    return item.title
                        .toUpperCase()
                        .includes(this.searchValue.toUpperCase())
                })
            }

            // Filter out by price
            if (this.maxPrice)
                tempProviders = tempProviders.filter((item) => {
                    return (item.price <= this.maxPrice)
                })

            // Sort by alphabetical order
            tempProviders = tempProviders.sort((a, b) => {
                if (this.sortBy == 'alphabetically') {
                    let fa = a.title.toLowerCase(), fb = b.title.toLowerCase()

                    if (fa < fb) {
                        return -1
                    }
                    if (fa > fb) {
                        return 1
                    }
                    return 0

                    // Sort by cooking time
                } else if (this.sortBy == 'price') {
                    return a.price - b.price
                }
            })

            // Show sorted array in descending or ascending order
            if (!this.ascending) {
                tempProviders.reverse()
            }

            return tempProviders
        }
    }
};
</script>

<style lang="scss">
#app {
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    transition: all 0.2s;
}

h2 {
    font-weight: bold;
    margin-bottom: 15px;
}

h3 {
    font-weight: 600;
    font-size: 16px;
}

#recipe-container {
    display: flex;
    flex-wrap: wrap;
}

.card {
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 5px 10px;
    margin: 10px;
    width: 40%;
}

.content {
    padding: 30px;
}

.recipte-title {
    font-size: 18px;
    font-weight: 600;
}


.ingredient-title {
    font-size: 16px;
    font-weight: 600;
    margin-top: 20px;
}

.recipe-image {
    width: 100%;
    max-height: 200px;
    padding: -10px -10px;
    ;
}

#sort-bar {
    width: 80%;
    // height: 80px;
    margin-left: 10px;
    background-color: #f2e0c1;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
}

.sort-button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    // height: 50px;
    height: 100%;
    width: 50px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
}

#sort-label {
    font-size: 12px;
}

#ascending-icon {
    // height: 30px;
    height: 100%;
    width: 30px;
}

#select {
    background-color: rgba(0, 0, 0, 0);
    border: none;
}

#cooking-time-input {
    width: 30px;
    margin-right: 10px;
}

#search-input {
    margin-right: 10px;
}
</style>