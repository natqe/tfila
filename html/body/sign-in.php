<section>
    <form action="" method="post">
        <fieldset>
            <legend>התחברות לאתר:</legend>
            <label>
                <span>דואר אלקטרוני</span>
                <input type="email" name="si_email" placeholder="name@email.com" spellcheck="false" required>
            </label>
            <label>
                <span>סיסמא</span>
                <input type="password" name="si_pass" autocomplete='off' required>
            </label>
            <label>
                <span>זכור אותי</span>
                <input type="checkbox" name="remember">
            </label>
        </fieldset>
        <input type="submit">
        <input type="reset">
    </form>
</section>
<!-- <?php
// if (isset($_POST['email']) && isset($_POST['password'])) {
//     $_SESSION['email']  = $_POST['email'];
//     $_SESSION['password']  = $_POST['password'];
// } else {
//     # code...
// }
?> -->