<script setup lang="ts">
</script>

<template>
<div class="auth d-flex justify-content-center align-items-center">
    <div class="left d-flex flex-column align-items-center justify-content-between">
        <h1 class="big-title mt-5">Born To Code</h1>
        <div class="d-flex under-title gap-1 mb-5">
            <span>Нет аккаунта?</span>
            <span class="connect">
                <a href="#">Присоединяйся</a>
            </span>
        </div>
    </div>
    <div class="center-line"></div>
    <div class="right d-flex flex-column align-items-center justify-content-between">
        <div class="login-input input-group">
            <div class="login input-group-text justify-content-center" id="basic-addon1">
                <img src="../assets/avatar_gray.png" />
            </div>
            <input type="text" class="form-control" placeholder="BornToCode" aria-label="BornToCode" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
            <div class="login input-group-text justify-content-center" id="basic-addon1">
                <img src="../assets/key_gray.png" />
            </div>
            <input type="text" class="form-control" placeholder="Пароль" aria-label="Пароль" aria-describedby="basic-addon1">
        </div>
        <button class="sign-in-button btn btn-light">
            <span>Войти</span>
        </button>
        <a href="#" class="forgot-pwd mb-5">Забыли пароль?</a>
    </div>
</div>
</template>

<style scoped lang="scss">
.sign-in-button {
    background-color: #F1F3F8;
    border-color: #F1F3F8;
    font-size: 18px;
    color: #393B44;
    width: 100px;
    font-size: 24px;

    img {
        width: 20px;
        height: 20px;
    }

    &:hover {
        @media (min-width: 1024px) {
            background-color: #F1F3F8;
            -webkit-box-shadow: 0px 5px 10px 2px rgba(57, 59, 68, 0.2);
            -moz-box-shadow: 0px 5px 10px 2px rgba(57, 59, 68, 0.2);
            box-shadow: 0px 5px 10px 2px rgba(57, 59, 68, 0.2);
        }
    }
}

.auth {
    gap: 100px;
}

.login {
    background-color: #D6E0F0;
    border: none;
    box-shadow: none;
    width: 75px;

    img {
        width: 24px;
        height: 24px;
    }
}

.form-control {
    background-color: #D6E0F0;
    border-left: 0;
    border: none;
    box-shadow: none;
    font-weight: 500;
    width: 325px;
    height: 75px;
    font-size: 24px;
    padding-left: 0;

    &:focus {
        border: none;
        box-shadow: none;
    }

    &::placeholder {
        color: #8D93AB;
        font-weight: 500;
    }
}

.left {
    height: 511px;

    .big-title {
        font-weight: 700;
        font-size: 96px;
        width: 215px;
        text-align: center;
        color: #393B44;
    }

    .under-title {
        span {
            font-weight: 400;
            color: #393B44;
            font-size: 20px;
        }

        .connect {
            text-decoration: underline;

            a {
                text-decoration: none;
                color: #393B44;
            }
        }
    }
}

.right {
    height: 511px;

    .login-input {
        margin-top: 100px;
    }
}

.center-line {
    width: 4px;
    height: 511px;
    background-color: #393B44;
    border-radius: 5px;
}

.forgot-pwd {
    text-decoration: underline;
    color: #393B44;
    font-size: 20px;
}
</style>