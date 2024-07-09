<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Set recipient email address
    $to = "bilal.aleem2406@gmail.com";

    // Compose email headers
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";

    // Compose email subject and content
    $email_subject = "New Message from Contact Form: $subject";
    $email_content = "You have received a new message from your website contact form.<br><br>";
    $email_content .= "<strong>Name:</strong> $name<br>";
    $email_content .= "<strong>Email:</strong> $email<br>";
    $email_content .= "<strong>Subject:</strong> $subject<br>";
    $email_content .= "<strong>Message:</strong><br>$message<br>";

    // Send email
    if (mail($to, $email_subject, $email_content, $headers)) {
        // Show success message
        echo '<div class="success-message">Message sent successfully. Thank you, ' . htmlspecialchars($name) . '!</div>';
    } else {
        // Show error message
        echo '<div class="error-message">Oops! Something went wrong. Please try again later.</div>';
    }
}
?>
