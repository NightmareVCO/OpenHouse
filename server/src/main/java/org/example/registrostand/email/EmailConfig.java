package org.example.registrostand.email;

import org.simplejavamail.api.mailer.Mailer;
import org.simplejavamail.api.mailer.config.TransportStrategy;
import org.simplejavamail.mailer.MailerBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EmailConfig {

    @Bean
    public Mailer mailer() {
        return MailerBuilder
                .withSMTPServer("in-v3.mailjet.com", 587, "3d7d02de4d0e973ea23d510d2564a1e6",
                        "e693106dd41424f3e227629bccfe8512")
                .withTransportStrategy(TransportStrategy.SMTP_TLS)
                .withSessionTimeout(10 * 1000)
                .clearEmailOverrides()
                .withDebugLogging(true)
                .buildMailer();
    }
}
