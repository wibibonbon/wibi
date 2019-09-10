<template>
  <div class="section">
    <div class="container">
      <div class="content">
          <div classs="title">Portfolio</div>
          <div class="flex-grid">
            <img :class="[{active:isActive},'grid-item item']"
          v-for="(entry, i) in allEntries"
          :key="i"
          :index="i"
          :entry="entry"
          :src="entry.img"
        >
        
        </img>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
import portfolioData from '../assets/data/portfolio-data.json'
export default {

	    data() {
        return {
            allEntries: portfolioData.entries,
            isActive: false,
            activeEntry: null,
        }
        
    },

    methods:{

    },
    

}
</script>

<style scoped lang="scss">

.flex-grid{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content:space-around;
}
.grid-item{
  padding: 10px;
  width: 30%;
  min-width: 300px;
}
</style>