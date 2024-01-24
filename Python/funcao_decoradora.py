# Funções decoradoras potencializam ou modificam a logica de 
# outra função ou metodo.

# Uma função decoradora e quando utilizamos o @ em cima de uma funcao

#Exemplo

# @decoradora - decodora potencializa a funcao oi com os recursos dela
# def oi():
#  print('oi')

## Criar uma função decoradora

def master(msg):
    def imprime():
        print("esse e a função decoradora")
    msg()
    return imprime


# criar uma função que vai receber a decoradora

@master
def chama_funcao():
    print("Esta esta Chamando a Função REAL")


## Chamando a função

chama_funcao()
