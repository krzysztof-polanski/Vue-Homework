var RegForm = {
    template: `
    <form>
        <label for="first-name">Enter your first name:</label>
        <input type="text" placeholder="Your Name" name="first-name"  required>

        <label for="last-name">Enter your last name:</label>
        <input type="text" placeholder="Your Last Name" name="last-name"  required>
        
        <label for="date-of-birth">Enter your birth date:</label>
        <input type="date" name="date-of-birth" required>


        <div>

            <label for="sex">Select sex:</label>
            
            <input type="radio" id="male" name="sex" value="male">
            <label for="male">Male</label>

            <input type="radio" id="female" name="sex" value="female">
            <label for="female">Female</label>
        </div>


        <label for="interests">Choose your interests:</label>

        <select name="interests" id="interests" multiple>
            <option value="sports">Sports</option>
            <option value="books">Books</option>
            <option value="politics">Politics</option>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
        </select>

        <button type="submit">Register</button>
    </form>
    `
}
Vue.component( 'regist-form', {
    template: `
    <form>
        <label for="first-name">Enter your first name:</label>
        <input type="text" placeholder="Your Name" name="first-name"  required>

        <label for="last-name">Enter your last name:</label>
        <input type="text" placeholder="Your Last Name" name="last-name"  required>
        
        <label for="date-of-birth">Enter your birth date:</label>
        <input type="date" name="date-of-birth" required>


        <div>

            <label for="sex">Select sex:</label>
            
            <input type="radio" id="male" name="sex" value="male">
            <label for="male">Male</label>

            <input type="radio" id="female" name="sex" value="female">
            <label for="female">Female</label>
        </div>


        <label for="interests">Choose your interests:</label>

        <select name="interests" id="interests" multiple>
            <option value="sports">Sports</option>
            <option value="books">Books</option>
            <option value="politics">Politics</option>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
        </select>

        <button type="submit">Register</button>
    </form>
    `
})

var app = new Vue({
    el: '#app',
    data: {
        message: "Test paragraph is working!"
    },
    methods: {
    }
})