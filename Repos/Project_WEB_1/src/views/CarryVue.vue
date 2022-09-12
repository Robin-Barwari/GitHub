<template>
    <div class="carry-view">
        <h2 style="text-align: center;">My Providers:</h2>

        <!-- Bar containing all sort inputs -->
        <div id="sort-bar">
            <select name="sortBy" id="select" v-model="sortBy">
                <option value="alphabetically">Alphabetically</option>
                <option value="Price">Price</option>
            </select>
            <button v-on:click="ascending = !ascending" class="sort-button">
                Sort
                <i v-if="ascending" class="fa fa-sort-up"></i>
                <i v-else class="fa fa-sort-down"></i>
            </button>
            <input type="text" v-model="searchValue" placeholder="Search Game" id="search-input" />
            <i class="fa fa-search"></i>
        </div>

        <!-- Where the array of games get rendered as cards -->
        <div id="provider-container">
            <div class="card" v-for="provider in filteredProviders" :key="provider.titelGame">
                <img :src="provider.img" class="provider-image">
                <div class="content">
                    <h1 class="provider-title">
                        {{ provider.titelGame }}
                    </h1>
                    <p>
                        {{ provider.description }}
                    </p>
                    <span class="rank-span">

                        <h3 class="rank-title">
                            Ranks:
                        </h3>
                        <ol class="rank-list">
                            <li v-for="rank in provider.ranks">- {{ rank }}</li>
                        </ol>
                    </span>

                    <h3>
                        Price:
                    </h3>
                    <p>
                        {{ provider.Price }} €
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
            ascending: true,
            sortBy: 'alphabetically',
            searchValue: '',
            maxPrice: null,
            providers: [
                {
                    titelGame: 'Overwatch',
                    contactInfo: 'ILike2Win@carry.com',
                    ranks: ['Grand Master'],
                    Price: '20',
                    img: '/overwatch_carry.jpeg',
                },
                {
                    titelGame: 'Rainbow Six Siege',
                    contactInfo: 'GG2EZ@carry.com',
                    ranks: ['Diamond II'],
                    Price: '35',
                    img: '/r6s_carry.webp',
                },
                {
                    titelGame: 'CS:GO',
                    contactInfo: 'Putin_nr_1@carry.com',
                    ranks: ['Gold Nova II'],
                    Price: '5',
                    img: '/csgo_carry.webp',
                },
                {
                    titelGame: 'Rocket League',
                    contactInfo: 'I_bad_fotballs@carry.com',
                    ranks: ['Platinum III'],
                    Price: '15',
                    img: '/rocket_carry.jpeg',
                },
                {
                    titelGame: 'Valorant',
                    contactInfo: 'W3ndig0@carry.com',
                    ranks: ['Silver II'],
                    Price: '150',
                    img: '/valorant_carry.jpg',
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
                    return item.titelGame
                        .toUpperCase()
                        .includes(this.searchValue.toUpperCase())
                })
            }

            // Filter out by price
            if (this.maxPrice)
                tempProviders = tempProviders.filter((item) => {
                    return (item.Price <= this.maxPrice)
                })

            // Sort by alphabetical order
            tempProviders = tempProviders.sort((a, b) => {
                if (this.sortBy == 'alphabetically') {
                    let fa = a.titelGame.toLowerCase(), fb = b.titelGame.toLowerCase()

                    if (fa < fb) {
                        return -1
                    }
                    if (fa > fb) {
                        return 1
                    }
                    return 0

                    // Sort by price
                } else if (this.sortBy == 'Price') {
                    return a.Price - b.Price
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
body {
    padding: 0px;
}

.carry-view {
    background: rgb(255, 255, 255);
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

#game-container {
    display: flex;
    flex-wrap: wrap;
}

.card {
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.3) 0 5px 10px;
    margin: 10px;
    width: 30%;
}

.content {
    padding: 30px;
}

.game-title {
    font-size: 18px;
    font-weight: 600;
}


.rank-title {
    font-size: 16px;
    font-weight: 600;
    margin-top: 20px;
}

.game-image {
    width: 5%;
    max-height: 75px;
    padding: -10px -10px;
    ;
}

#sort-bar {
    width: 100%;
    height: 50px;
    margin-left: 0px;
    background-color: #f4b18a;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
}

.sort-button {
    background-color: rgba(0, 0, 0, 0);
    border: 1px;
    height: 50px;
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
    height: 30px;
    height: 100%;
    width: 30px;
}

#select {
    background-color: rgba(0, 0, 0, 0);
    border: none;
}

#price-input {
    width: 30px;
    margin-right: 10px;
}

#search-input {
    margin-right: 10px;
}

.column {}
</style>