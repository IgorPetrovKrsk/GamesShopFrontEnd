export default function LoginForm({ setNewUser }) {
    return <form>
        <input type="text" name="email" id="" placeholder="Email" />
        <input type='password' name="password" id="" placeholder="Password" />
        <input type="submit" value='Login' />
        <p>Not a User? <span onClick={() => { setNewUser(true) }}> Sing UP</span></p>
    </form>
}