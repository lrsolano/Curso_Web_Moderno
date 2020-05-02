const schedule = require('node-schedule')
module.exports = app => {
    schedule.scheduleJob('* 1 * * *', async function(){
        const usersCount = await app.db('users').count('id as count').first()
        const categoriesCount = await app.db('categories').count('id as count').first()
        const articlesCount = await app.db('articles').count('id as count').first()
        
        const results = {}
        await app.db('stat').then(values => values.map(v => results[v.name] = v.value))

        const changeUsers = usersCount.count !== results.users
        const changeCategories = categoriesCount.count !== results.categories
        const changeArticles = articlesCount.count !== results.articles

        if(changeUsers){
            app.db('stat').update({value:usersCount.count})
                .where({name: 'users'})
                .catch(err => console.log(err))
            console.log('Valores users atualizados')
              
        }
        if (changeArticles){
            app.db('stat').update({value:articlesCount.count})
                .where({name: 'articles'})
                .catch(err => console.log(err))
            console.log('Valores articles atualizados')
        }
        if(changeCategories){
            app.db('stat').update({value:categoriesCount.count})
                .where({name: 'categories'})
                .catch(err => console.log(err))
            console.log('Valores categories atualizados')
        }

        
    })
}