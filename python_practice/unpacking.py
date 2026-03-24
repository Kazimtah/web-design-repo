def setup_database_connnectino(hostname,port,username, password):
    print(hostname, port, username, password)
    return {'hostname': hostname, 'Port': port, 'username': username, 'password': password}

connectin_data = {
    'hostname': 'localhost', 'port': 3574, 'username': 'admin', 'password': 'admin134'
}
# setup_database_connnectino(connectin_data['hostname'], connectin_data['port'], connectin_data['password'], connectin_data['username'])

setup_database_connnectino(**connectin_data)