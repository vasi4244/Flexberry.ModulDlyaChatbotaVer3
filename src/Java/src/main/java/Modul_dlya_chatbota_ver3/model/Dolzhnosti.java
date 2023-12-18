package Modul_dlya_chatbota_ver3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Modul_dlya_chatbota_ver3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Должности
 */
@Entity(name = "IISModul_dlya_chatbota_ver3Должности")
@Table(schema = "public", name = "Должности")
public class Dolzhnosti {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодДол")
    private Integer коддол;

    @Column(name = "Наименование")
    private String наименование;


    public Dolzhnosti() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодДол() {
      return коддол;
    }

    public void setКодДол(Integer коддол) {
      this.коддол = коддол;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }


}