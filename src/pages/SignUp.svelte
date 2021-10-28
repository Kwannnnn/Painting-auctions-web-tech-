<!--Taken and modified from https://svelte.dev/repl/ca967b45a5aa47b2bb2f9118eb79eefe?version=3.43.1-->
<script>
    import {useForm, validators, HintGroup, Hint, email, required, minLength} from "svelte-use-form";
    import tokenStore from "../stores/token";
    import router from "page";
    import PageLayout from "../components/layout/PageLayout.svelte";

    const form = useForm();

    let email_address;
    let password;
    let username;

    const signup = async () => {
        const response = await fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email_address: email_address,
                password: password,
                username: username,
                isAdmin: false

            })
        });

        if (response.status === 201) {
            alert("Account successfully created");
            router.redirect('/login');
        } else {
            alert("Sign up failed \n" + response.statusText);
        }
    }

</script>

<PageLayout>

    <div class="container h-screen px-5 py-24 mx-auto flex flex-wrap items-center">
        <form use:form class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">

            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign up</h2>

            <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" use:validators={[required, email]} bind:value={email_address}
                       class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                <HintGroup for="email">
                    <Hint on="required" class="text-red-500">This is a mandatory field</Hint>
                    <Hint on="email" hideWhenRequired class="text-red-500">Email is not valid</Hint>
                </HintGroup>
            </div>

            <div class="relative mb-4">
                <label for="username" class="leading-7 text-sm text-gray-600">Username</label>
                <input type="text" id="username" name="username" use:validators={[required]} bind:value={username}
                       class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                <Hint for="username" on="required" class="text-red-500">This is a mandatory field</Hint>
            </div>

            <div class="relative mb-4">
                <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                <input type="password" id="password" name="password" use:validators={[required, minLength(6)]}
                       bind:value={password}
                       class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                <Hint for="password" on="required" class="text-red-500">This is a mandatory field</Hint>
                <Hint for="password" on="minLength" class="text-red-500">Password must contain at least 6 characters</Hint>
            </div>

            <button disabled={!$form.valid} on:click|preventDefault={signup}
                    class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-5">
                Sign up
            </button>

            <p class="text-center">Already have an account? <a href="/login">Login</a></p>
        </form>
    </div>
</PageLayout>
