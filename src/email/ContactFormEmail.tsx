import { ContactFormSchema } from "@/lib/validations";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function ContactFormEmail({
  email,
  message,
  name,
}: ContactFormSchema) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading>You received a message from {name}</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender&apos;s email is {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
