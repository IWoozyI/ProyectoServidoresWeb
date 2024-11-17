package graphql;

import com.servidores.LoginyReserva1.logica.Cliente;
import com.servidores.LoginyReserva1.repositorio.ClienteRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ClienteResolver {

    private final ClienteRepository clienteRepository;

    public ClienteResolver(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    // Consultas
    public List<Cliente> getClientes() {
        return clienteRepository.findAll();
    }

    public Cliente getCliente(Long id) {
        return clienteRepository.findById(id).orElse(null);
    }

    // Mutaciones
    public Cliente createCliente(String nombre, String email) {
        Cliente cliente = new Cliente();
        cliente.setNombre(nombre);
        cliente.setEmail(email);
        return clienteRepository.save(cliente);
    }

    public Cliente updateCliente(Long id, String nombre, String email) {
        return clienteRepository.findById(id).map(cliente -> {
            if (nombre != null) cliente.setNombre(nombre);
            if (email != null) cliente.setEmail(email);
            return clienteRepository.save(cliente);
        }).orElse(null);
    }

    public String deleteCliente(Long id) {
        return clienteRepository.findById(id).map(cliente -> {
            clienteRepository.delete(cliente);
            return "Cliente eliminado";
        }).orElse("Cliente no encontrado");
    }
}