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


Docker:

 sudo apt install ca-certificates curl
 sudo install -m 0755 -d /etc/apt/keyrings
 sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
 sudo chmod a+r /etc/apt/keyrings/docker.asc

 echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update

 sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-compose

 sudo apt install docker-compose

 sudo usermod -aG docker $USER

 newgrp docker

 sudo systemctl stop systemd-resolved

 sudo systemctl disable systemd-resolved

 sudo apt install prometheus-node-exporter

 ./node_exporter --web.listen-address="127.0.0.1:9100" &



 kiki@gmail.com
 tototiti
 7851202734