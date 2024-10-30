#!/bin/bash

sudo apt update -y

# Install dependencies
sudo apt install -y ca-certificates curl ufw wireguard

# User
sudo useradd -m -s /bin/bash powerzio
echo "powerzio:123456" | sudo chpasswd
sudo usermod -aG sudo powerzio

# Setup SSH
sudo mkdir -p /home/powerzio/.ssh
sudo cp config/local/authorized_keys /home/powerzio/.ssh/authorized_keys
sudo chmod 700 /home/powerzio/.ssh
sudo chmod 600 /home/powerzio/.ssh/authorized_keys
sudo chown -R powerzio:powerzio /home/powerzio/.ssh
sudo cp config/local/sshd_config /etc/ssh/sshd_config
sudo systemctl restart ssh

# Free port 53
sudo systemctl stop systemd-resolved
sudo systemctl disable systemd-resolved

# Docker install
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
    $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-compose
sudo usermod -aG docker powerzio
sudo newgrp docker
