# m-sec-908


sudo apt update
sudo apt install wireguard
setup wg0.conf
sudo systemctl enable wg-quick@wg0.service
sudo systemctl start wg-quick@wg0.service
sudo systemctl status wg-quick@wg0.service


User setup:
sudo adduser powerzio

SSH setup
sudo mkdir -p /home/powerzio/.ssh
sudo nano /home/powerzio/.ssh/authorized_keys

paste the pubkey (must be 1 line)

sudo chown -R powerzio:powerzio /home/powerzio/.ssh
sudo chmod 700 /home/powerzio/.ssh
sudo chmod 600 /home/powerzio/.ssh/authorized_keys

sudo nano /etc/ssh/sshd_config

PubkeyAuthentication yes
PasswordAuthentication yes
ChallengeResponseAuthentication no
AllowUsers powerzio
ListenAddress 10.0.0.11
sudo systemctl restart ssh
