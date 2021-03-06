<?php

/**
 * This file is part of the Spryker Commerce OS.
 * For full license information, please view the LICENSE file that was distributed with this source code.
 */

namespace Pyz\Zed\ConfigurableBundleStorage;

use Pyz\Zed\Synchronization\SynchronizationConfig;
use Spryker\Zed\ConfigurableBundleStorage\ConfigurableBundleStorageConfig as SprykerConfigurableBundleStorageConfig;

class ConfigurableBundleStorageConfig extends SprykerConfigurableBundleStorageConfig
{
    /**
     * @return string|null
     */
    public function getConfigurableBundleTemplateSynchronizationPoolName(): ?string
    {
        return SynchronizationConfig::DEFAULT_SYNCHRONIZATION_POOL_NAME;
    }
}
