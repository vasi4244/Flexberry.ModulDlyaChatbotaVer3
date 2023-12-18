package Modul_dlya_chatbota_ver3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Modul_dlya_chatbota_ver3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Опрос
 */
@Entity(name = "IISModul_dlya_chatbota_ver3Опрос")
@Table(schema = "public", name = "Опрос")
public class Opros {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодОпроса")
    private Integer кодопроса;

    @Column(name = "Наименование")
    private String наименование;


    public Opros() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодОпроса() {
      return кодопроса;
    }

    public void setКодОпроса(Integer кодопроса) {
      this.кодопроса = кодопроса;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }


}