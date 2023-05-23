<script setup lang="ts">
</script>

<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Born To Code</a>
            <div class="input-group">
                <div class="search input-group-text" id="basic-addon1">
                    <img src="../assets/search.png" />
                </div>
                <input type="text" class="form-control" placeholder="Поиск" aria-label="Поиск" aria-describedby="basic-addon1">
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.navbar-brand {
    font-weight: 400;
    font-size: 36px;
    color: #393B44;
}

.search {
    width: 32px;
    background-color: #D6E0F0;
    border: none;
    box-shadow: none;
    
    img {
        width: 20px;
        height: 20px;
    }
}

.form-control {
    background-color: #D6E0F0;
    border-left: 0;
    border: none;
    box-shadow: none;

    &:focus {
        border: none;
        box-shadow: none;
    }

    &::placeholder {
        color: #8D93AB;
        font-weight: 500;
    }
}
</style>
