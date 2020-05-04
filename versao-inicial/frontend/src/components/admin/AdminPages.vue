<template>
    <div>
        <PageTitle icon="fa fa-cogs" main=" Administração do Sistema" sub="Cadastro & Companhia" />
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card active-tab-class="text-success">
                    <b-tab title="Artigos" active>
                        <ArticleAdmin />
                    </b-tab>
                    <b-tab title="Categorias">
                        <CategoryAdmin />
                    </b-tab>
                    <b-tab title="Usuarios">
                        <UserAdmin />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>

</template>

<script>
import PageTitle from '../template/PageTitle'
import ArticleAdmin from './ArticleAdmin'
import CategoryAdmin from './CategoryAdmin'
import UserAdmin from './UserAdmin'

export default {
    name: 'AdminPages',
    components: {PageTitle,ArticleAdmin,CategoryAdmin,UserAdmin}
}
</script>

<style>
    .tabs{
        background-color: rgba(183, 122, 233, 0.2);
        
    }
    .card-header{
        background-color: rgba(183, 122, 233, 0.4);
    }
    .nav-tabs .nav-link.active{
         background-color: rgba(183, 122, 233, 0.6) !important;
         outline: 0;
         color: #000;
    }
    .nav-link{
        color: #000;
    }


    
</style>