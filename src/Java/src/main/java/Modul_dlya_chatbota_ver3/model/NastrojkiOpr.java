package Modul_dlya_chatbota_ver3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Modul_dlya_chatbota_ver3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: НастройкиОпр
 */
@Entity(name = "IISModul_dlya_chatbota_ver3НастройкиОпр")
@Table(schema = "public", name = "НастройкиОпр")
public class NastrojkiOpr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Opros")
    @Convert("Opros")
    @Column(name = "Опрос", length = 16, unique = true, nullable = false)
    private UUID _oprosid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Opros", insertable = false, updatable = false)
    private Opros opros;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @OneToMany(mappedBy = "nastrojkiopr", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Soderzhanie> soderzhanies;


    public NastrojkiOpr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}