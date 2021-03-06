package Top.Top.Application.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public abstract class Item {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private Float price;
    private boolean showOnMenu;

    @ManyToOne
    @JsonIgnore
    private Ticket ticket;

    public Item(String name, Float price, boolean showOnMenu) {
        this.name = name;
        this.price = price;
        this.showOnMenu =showOnMenu;
    }

    public Ticket getTicket() {
        return ticket;
    }

    protected Item() {
    }

    public String getName() {
        return name;
    }

    public boolean isShowOnMenu() {
        return showOnMenu;
    }

    public Float getPrice() {
        return price;
    }

    public void addTicket(Ticket ticket) {
        this.ticket = ticket;
    }
}
