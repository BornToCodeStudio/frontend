<script setup lang="ts">
</script>

<template>
<div class="auth d-flex justify-content-center align-items-center">
    <div class="left d-flex flex-column align-items-center justify-content-between">
        <h1 class="big-title mt-5">Born To Code</h1>
    </div>
    <div class="center-line"></div>
    <div class="right d-flex flex-column align-items-center justify-content-between">
        <div class="login-input input-group">
            <div class="image input-group-text justify-content-center" id="basic-addon1">
                <img src="../assets/avatar_gray.png" />
            </div>
            <input type="text" class="form-control" placeholder="BornToCode" aria-label="BornToCode" aria-describedby="basic-addon1">
        </div>
        <div class="pwd-input input-group">
            <div class="image input-group-text justify-content-center" id="basic-addon1">
                <img src="../assets/key_gray.png" />
            </div>
            <input type="text" class="form-control" placeholder="Желаемый пароль" aria-label="Пароль" aria-describedby="basic-addon1">
        </div>
        <button class="sign-up-button btn btn-light">
            <span>Зарегистрироваться</span>
        </button>
        <a href="#" class="forgot-pwd mb-5 text-center">Регистрируясь вы соглашаетесь с условиями
                                        <br>Предоставления услуг и Политикой конфиденциальности.</a>
    </div>
</div>
</template>

<style scoped lang="scss">
.sign-up-button {
    background-color: #F1F3F8;
    border-color: #F1F3F8;
    font-size: 18px;
    color: #393B44;
    text-align: center;
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

    @media (max-width: 992px) {
        flex-direction: column;
        gap: 0;
    }
}

.image {
    background-color: #D6E0F0;
    border: none;
    box-shadow: none;
    width: 75px;

    @media (max-width: 992px) {

    }

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
    width: 400px;
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
    height: 474px;

    .big-title {
        font-weight: 700;
        font-size: 96px;
        width: 215px;
        text-align: center;
        color: #393B44;

        @media (max-width: 995px) {
            font-size: 48px;
            width: 100%;
        }
    }
}

.right {
    height: 560px;

    .login-input {
        margin-top: 100px;
    }

    @media (max-width: 995px) {
        justify-content: space-between !important;
        height: 1000px;

        .form-control{
            position: relative;
            width: 100px;
        }

        @mixin small-input {
            width: 100%;

            input {
                padding: 10px;
                text-align: center;

                border-radius: 0.375rem !important;
            }

            .image {
                display: none;
                position: absolute;
                opacity: 0;
            }
        }

        .login-input {
            margin-top: 0;

            @media (max-width: 470px) {
                @include small-input();
            }
        }

        .pwd-input {
            @media (max-width: 470px) {
                @include small-input();
            }
        }

        .forgot-pwd {
            margin-bottom: 0 !important;
        }
    }
}

.center-line {
    width: 4px;
    height: 511px;
    background-color: #393B44;
    border-radius: 5px;

    @media (max-width: 992px) {
        display: none;
        position: absolute;
        opacity: 0;
    }
}

.forgot-pwd {
    text-decoration: underline;
    color: #393B44;
    font-size: 20px;
}
</style>