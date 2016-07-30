package io.koju.autopos.kernel.domain;

import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;
import java.io.Serializable;

import static lombok.AccessLevel.PROTECTED;

@MappedSuperclass
public abstract class VersionedEntity<ID extends Serializable>
        extends AbstractEntity<ID>
        implements Versioned {

    @Version
    @Column(name = "version")
    @Setter(PROTECTED)
    private Long version;

    @Override
    public Long getVersion() {
        return version;
    }

}
