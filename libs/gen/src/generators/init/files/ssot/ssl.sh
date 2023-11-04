
openssl req -x509 -newkey rsa:4096 -keyout private.key -out certificate.crt -days 365 -subj "/CN=mydomain.com/OU=\"My Org\"/C=US/ST=California/L=\"San Francisco\"/O=\"My Organization\""
